# NedapOnsApi.DossierReport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**uuid** | **String** |  | [optional] 
**reportingDate** | **Date** |  | [optional] 
**comment** | **String** |  | [optional] 
**flagged** | **Boolean** |  | [optional] 
**confidential** | **Boolean** | Signals whether a report is only visible to certain disciplines (listed in reportAuthorizations) In the case of SOEP-reports (reportType 315), this flag is only true when ALL reportEntries are confidential. | [optional] 
**hidden** | **Boolean** |  | [optional] 
**hidingReason** | **String** |  | [optional] 
**parentId** | **Number** |  | [optional] 
**parentType** | **String** |  | [optional] 
**carenId** | **Number** |  | [optional] 
**carenName** | **String** |  | [optional] 
**carenRole** | **String** |  | [optional] 
**status** | **Number** |  | [optional] 
**clientId** | **Number** |  | [optional] 
**employeeId** | **Number** |  | [optional] 
**reportTypeId** | **Number** | The report type, the objectId of {@link com.nedap.healthcare.domain.dossier.ReportType} Which should be one of the following values: &lt;pre&gt; 101 Rapportage 102 Gewicht 103 Bloeddruk 104 Temperatuur 105 Bloedsuiker 106 Vocht inname 107 Vocht uitscheiding 108 Defecatie 109 Medisch 110 Voortgang 111 Familie communicatie 112 Keten communicatie 309 Stemming 310 Omaha 311 Saturatie 314 Pijnscore 315 SOEP 316 Bristol-stoelgangschaal 317 Klinimetrie &lt;/pre&gt; | 
**carePlanEntryId** | **Number** |  | [optional] 
**reportEntries** | [**[DossierReportEntry]**](DossierReportEntry.md) |  | [optional] 
**expertiseProfile** | [**ExpertiseProfile**](ExpertiseProfile.md) |  | [optional] 
**reportActions** | [**[DossierReportAction]**](DossierReportAction.md) |  | [optional] 
**reportAuthorizations** | [**[DossierReportAuthorization]**](DossierReportAuthorization.md) |  | [optional] 
**soapReportEntries** | [**[DossierSoapReportEntry]**](DossierSoapReportEntry.md) |  | [optional] 
**episodeId** | **Number** | Deprecated since: 14-03-2019 -- use episodeIds | [optional] 
**episodeIds** | **[Number]** |  | [optional] 
**restrictiveMeasureId** | **Number** |  | [optional] 
**reportLinkId** | **Number** |  | [optional] 
**reportLinkType** | [**DossierReportLinkType**](DossierReportLinkType.md) |  | [optional] 
