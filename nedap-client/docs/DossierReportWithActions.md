# NedapOnsApi.DossierReportWithActions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the report | 
**uuid** | **String** | UUID of the report | [optional] 
**reportedAt** | **Date** | Timestamp of the report. It is usually time when the report was created but it can be set when report is created.  | 
**comment** | **String** | Text comment on the report | [optional] 
**flagged** | **Boolean** | When set to &#x60;true&#x60; then report is marked as important/flagged. Flagged reports are displayed on the client overview page.  | 
**hidden** | **Boolean** | When set to &#x60;true&#x60; the report is hidden. Only users with &#x60;ApplicationManager&#x60; right or authors of the report can see this report.  | 
**hidingReason** | **String** | The reason why this report is hidden (see &#x60;hidden&#x60; property). When report is hidden then this field is always filled because hiding reason is mandatory for hidden reports.  | [optional] 
**createdAt** | **Date** | Timestamp of the time when report was created (unlike reportedAt, this one cannot be changed). | 
**updatedAt** | **Date** | Timestamp of the time when report was updated | 
**status** | [**DossierReportStatus**](DossierReportStatus.md) |  | 
**clientId** | **Number** | ID of the client this report belongs to | 
**reportTypeId** | **Number** | Type of the report provided as a number. Following values are standard report types: - 101 Text report - 102 BMI (weight and height) report - 103 Blood pressure report - 104 Temperature report - 105 Blood sugar (Glucose) report - 106 Fluid-in report - 107 Fluid-out report - 108 Defecation report - 109 Medical report - 110 Progress report - 111 Family report - 112 Chain (Ketencommunicatie) report - 309 Mood report - 310 Omaha report - 311 Saturation report - 314 Pain report - 315 SOAP report - 316 Bristol report - 317 Clinimetrics (Next Dossier) report - 318 Photo report  | 
**reportTypeName** | **String** | Name (in Dutch) of the report type. | 
**reportTypeIconName** | **String** | Name of the icon for the report type of this report. It&#x27;s not the icon itself, and it is up to the consumer to translate name of the icon to the actual icon that can be displayed.  | 
**authorName** | **String** | Name of the author of the report. Can be a name of the employee who created the report or a name of Caren user. | 
**authorType** | [**DossierReportAuthorType**](DossierReportAuthorType.md) |  | 
**authorId** | **Number** | ID of the report author, can be an ID of an employee or ID of a user in Caren. It can also be empty in case of external authors  | [optional] 
**authorRole** | **String** | Role of the report author. This field is used only for caren reports | [optional] 
**authorExpertiseProfileId** | **Number** | ID of author&#x27;s expertise (education) profile at the time of report creation.  This field is empty for caren reports or when employee did not have any expertise profile assigned.  | [optional] 
**authorExpertiseProfileName** | **String** | Name of author&#x27;s expertise (education) profile at the time of report creation.  This field is empty for caren reports or when employee did not have any expertise profile assigned.  | [optional] 
**registrationCouplingUuid** | **String** | UUID of the registration coupling that is related to this report. | [optional] 
**episodeIds** | **[Number]** | List of episode IDs that this report is linked to | [optional] 
**restrictiveMeasureId** | **Number** | ID of the restrictive measure this report is linked to. &#x60;null&#x60; when there is no link. | [optional] 
**carePlanEntryId** | **Number** | ID of the care plan entry this report is linked to. &#x60;null&#x60; when there is no link. | [optional] 
**reportLinkId** | **Number** | ID of the report in external system. Type of the external system is defined in &#x60;reportLinkType&#x60; property. | [optional] 
**reportLinkType** | [**DossierReportLinkType**](DossierReportLinkType.md) |  | [optional] 
**actions** | [**DossierCombinedReportActionsViewModel**](DossierCombinedReportActionsViewModel.md) |  | 
**confidential** | **Boolean** | When set to &#x60;true&#x60; then this report is not public and can only be seen by employees with proper level of authorization (see the &#x60;authorizations&#x60; property in this model)  | 
**authorizations** | [**DossierReportAuthorizationsViewModel**](DossierReportAuthorizationsViewModel.md) |  | 
**measurements** | [**[DossierMeasurementViewModel]**](DossierMeasurementViewModel.md) | List of measurements (previously listed as report entries) to display when report is rendered | 
**photos** | [**[DossierReportPhotoViewModel]**](DossierReportPhotoViewModel.md) | List of photos attached to the report | 
**goals** | [**[DossierReportGoalViewModel]**](DossierReportGoalViewModel.md) | List of plan goals linked to the report | [optional] 
**soap** | [**DossierSoapViewModel**](DossierSoapViewModel.md) |  | [optional] 
**reactions** | [**[DossierReportReactionViewModel]**](DossierReportReactionViewModel.md) | List of reactions to this report | 
