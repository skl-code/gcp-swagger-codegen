# NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The type of legal status. Currently supported types in Dossier are: - Vrijwillige opname - Artikel 60 Bopz-indicatie - Rechterlijke machtiging (RM) - Inbewaringstelling (IBS)  In 2020 Wzd and Wvggz take effect and dossier supports the following additional legal status types: - Ondertoezichtstelling (OTS) - Zorgmachtiging (ZM) - Crisismaatregel (CM) - Voortgezette crisismaatregel (VCM) - Terbeschikkingstelling (TBS) - Plaatsing Inrichting Jeugdigen (PIJ) - Artikel 21 Wzd-indicatie - Zelfbindingsverklaring - Wfz 2.3 Schakel-artikel - Voorwaardelijke machtiging voor jongvolwassenen met een verstandelijke beperking (VMM) In 2022, dossier supports Jeugd law and the following additional legal status types: - Voorlopige onder toezichtstelling (VOTS) - Machtiging uithuisplaatsing (MUHP) - Gezagsbeëindigende maatregel - Voogdijmaatregel - Tijdelijke voogdij - Voorlopige voogdij (VoVo) - Jeugdreclassering - Machtiging gesloten jeugdhulp (MGJ)  - Voorwaardelijke machtiging gesloten jeugdhulp (VMGJ)  - Voorwaardelijke PIJ (Art. 77x lid 2)  - Onvoorwaardelijke PIJ (Art. 77s)  - Verlenging onvoorwaardelijke PIJ (Art. 77t)  - Voorwaardelijke (beëindiging) PIJ, met algemene voorwaarden (Art. 77s)  - Verlenging voorwaardelijke beëindiging PIJ (Art. 77z)  - Gedragsbeïnvloedende maatregel (Art. 77w)  - Voorwaardelijke veroordeling (Art. 77x)  - Jeugddetentie (Art. 77i)  - Spoedmachtiging gesloten jeugdhulp (Art. 6.1.3 Jw) | [optional] 
**code** | [**DossierMedicalInvoluntaryCareLegalStatusTypeCode**](DossierMedicalInvoluntaryCareLegalStatusTypeCode.md) |  | [optional] 
**beginDate** | **Date** | The start date of the legal status. May be empty if the client is in voluntary care (Vrijwillige opname) | [optional] 
**endDate** | **Date** | The end date of the legal status. If this is in the past, the described legal status is no longer valid | [optional] 
**expirationDate** | **Date** | The expiration date of the legal status | [optional] 
**comments** | **String** | Extra comments relating to this legal status | [optional] 
**endingReason** | **String** | The reason to end the legal status | [optional] 
**documentId** | **Number** | The ID of the document linked to this legal status | [optional] 
**documentName** | **String** | The name of the document linked to this legal status | [optional] 
**archived** | **Boolean** | The archived status | [optional] 
**request** | **Boolean** | The request status | [optional] 
**legalStatusDocuments** | [**[DossierMedicalInvoluntaryCareLegalStatusDocument]**](DossierMedicalInvoluntaryCareLegalStatusDocument.md) | A list of documents | [optional] 
**legalStatusSuspensions** | [**[DossierMedicalInvoluntaryCareLegalStatusSuspension]**](DossierMedicalInvoluntaryCareLegalStatusSuspension.md) | A list of suspensions | [optional] 
**legalGrounds** | [**[DossierMedicalInvoluntaryCareLegalGround]**](DossierMedicalInvoluntaryCareLegalGround.md) | A list of legal grounds | [optional] 
