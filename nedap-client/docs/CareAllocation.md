# NedapOnsApi.CareAllocation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**clientId** | **Number** |  | 
**beginDate** | **Date** |  | 
**endDate** | **Date** |  | [optional] 
**comments** | **String** |  | [optional] 
**destination** | **String** | NVT: N.v.t. EIGEN_OMGEVING: Eigen omgeving EIGEN_OMGEVING_DAGBEHANDELING: Eigen omgeving met dagbehandeling INSTELLING_WLZ: Instelling (WLZ) of ziekenhuis INSTELLING_NIET_WLZ: Instelling (niet-WLZ) | [optional] 
**reason** | **String** | REJECTED: Afgekeurd CLASS_CHANGED: Klasse is aangepast REVOKE_MUT: Intrekking MUT REVOKE_MAZ: Intrekking MAZ IN_CARE: N.v.t. DISMISS: Ontslag (intramuraal) DEATH: Overlijden TEMP_GONE: Tijdelijke afwezigheid REFUSED_BY_PROVIDER: Aanbieder weigert functie REFUSED_BY_CLIENT: Cliënt weigert functie RESUME: Onderbroken functie hervat END_OF_CARE: Beëindiging zorg TRANSFER: Overplaatsing END_OF_CARE_CLOSE_FUNCTION: Einde zorg (functies intrekken) END_OF_CARE_OPEN_FUNCTION: Einde zorg (functies openlaten) TRANSFER_NO_MAZ: Overplaatsing (er is geen Maz) REQUEST_CUSTOM_CARE_ORDER: Aanvraag aangepaste zorgtoewijzing END_OF_CARE_AFTER_INTAKE: Beëindiging zorg na intake DEATH_BY_SUICIDE: Overlijden door suïcide | [optional] 
**reasonTemporary** | **String** | NVT: N.v.t. VAKANTIEVERLOF: Vakantieverlof ZIEKENHUISOPNAME: Ziekenhuisopname KORTE_VERBLIJFPLAATSING: Korte verblijfplaatsing in WLZ-erkende instelling TIJDELIJK_THUIS: Tijdelijk thuis PANDEMIE: Pandemie | [optional] 
**careProviderId** | **Number** | Care provider id, required when reason is TRANSFER and destination is INSTELLING_WLZ | [optional] 
