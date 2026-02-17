# NedapOnsApi.DossierAlert

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of this alert | [optional] 
**type** | **String** | The type of alert | [optional] 
**icon** | **String** | Name of Ivy icon to show for this alert | [optional] 
**iconUrl** | **String** | The URL for the icon for this alert | [optional] 
**iconPngUrl** | **String** | The PNG URL for the icon for this alert | [optional] 
**protocol** | **String** | Protocol for this alert | [optional] 
**description** | **String** | Description of this alert | [optional] 
**beginDate** | **Date** | Begin date of this alert | [optional] 
**endDate** | **Date** | End date of this alert | [optional] 
**active** | **Boolean** | Whether or not the alert is currently active An alert is active when the day of retrieval falls between the begin and end dates | [optional] 
**topicId** | **Number** | The ID of the topic this alert is linked to | [optional] 
**authorizedExpertiseProfileIds** | **[Number]** | Only users with these expertise profiles are allowed to access this alert | [optional] 
**authorizedExpertiseGroupIds** | **[Number]** | Only users with these expertise groups are allowed to access this alert | [optional] 
**encodings** | [**[DossierEncoding]**](DossierEncoding.md) | The encodings of this alert | [optional] 
**feederAuditContentStore** | [**DossierFeederAuditContentStoreType**](DossierFeederAuditContentStoreType.md) |  | [optional] 
**feederAuditContentId** | **String** | Identifier referencing the original content in the feederAuditContentStore | [optional] 
**feederAuditSenderName** | **String** | Name of the sender of the original content | [optional] 
**feederAuditTransferType** | [**DossierFeederAuditTransferType**](DossierFeederAuditTransferType.md) |  | [optional] 
