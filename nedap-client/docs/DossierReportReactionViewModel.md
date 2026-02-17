# NedapOnsApi.DossierReportReactionViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the reaction | 
**reportedAt** | **Date** | Timestamp of the reaction. It is usually time when the reaction was created but it can be set when reaction is created.  | 
**comment** | **String** | Text comment on the report | [optional] 
**status** | [**DossierReportStatus**](DossierReportStatus.md) |  | 
**authorName** | **String** | Name of the author of the reaction. Can be a name of the employee who created the reaction or a name of Caren user. | 
**authorType** | [**DossierReportAuthorType**](DossierReportAuthorType.md) |  | 
**authorId** | **Number** | ID of the report author, can be an ID of an employee or ID of a user in Caren. It can also be empty in case of external authors  | [optional] 
**authorRole** | **String** | Role of the report author. This field is used only for caren reports | [optional] 
**authorExpertiseProfileId** | **Number** | ID of author&#x27;s expertise (education) profile at the time of report creation.  This field is empty for caren reports or when employee did not have any expertise profile assigned.  | [optional] 
**authorExpertiseProfileName** | **String** | Name of author&#x27;s expertise (education) profile at the time of report creation.  This field is empty for caren reports or when employee did not have any expertise profile assigned.  | [optional] 
