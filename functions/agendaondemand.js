const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const https = require('https');
const ApiClient = require('./src/ApiClient');
const AgendaApi = require('./src/api/AgendaApi'); // Check de exacte naam in de gegenereerde src/api/ folder

const smClient = new SecretManagerServiceClient();

exports.checkAgendaOndemand = async (req, res) => {
    // 1. Alleen verzoeken toestaan met een medewerkerId (bijvoorbeeld)
    const medewerkerId = req.query.medewerkerId;
    if (!medewerkerId) {
        return res.status(400).send('Fout: medewerkerId is verplicht.');
    }

    try {
        // 2. Certificaat ophalen (mTLS)
        const [version] = await smClient.accessSecretVersion({
            name: 'projects/bi-to-bigquery/secrets/nedap-mtls-cert/versions/latest',
        });
        
        const mtlsAgent = new https.Agent({
            pfx: version.payload.data,
            passphrase: 'JE_WACHTWOORD' 
        });

        // 3. Nedap Client configureren
        const defaultClient = ApiClient.instance;
        defaultClient.agent = mtlsAgent;
        const api = new AgendaApi();

        console.log(`Agenda wordt opgehaald voor medewerker: ${medewerkerId}`);

        // 4. De daadwerkelijke Nedap aanroep
        // De parameters (zoals datums) haal je uit de request query
        const opts = {
            'datumVanaf': req.query.start || new Date().toISOString()
        };

        api.getAgenda(medewerkerId, opts, (error, data, response) => {
            if (error) {
                console.error('Nedap API Fout:', error);
                return res.status(500).json({ error: error.message });
            }

            // 5. Stuur de agenda direct terug naar de gebruiker
            res.status(200).json(data);
        });

    } catch (err) {
        console.error('Systeemfout:', err);
        res.status(500).send('Interne Server Fout');
    }
};