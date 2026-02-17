# NedapOnsApi.HermesNotification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**uuid** | **String** | The universal unique id for this notification This can be filled by the sending application, if not Hermes will generate one | [optional] 
**title** | **String** | The title displayed of this notification | [optional] 
**message** | **String** | The contents of the notification | [optional] 
**path** | **String** | The path for a given deployment where to go to when this notification is clicked | [optional] 
**deploymentType** | **String** | The deployment type where this notification refers to | [optional] 
**collapseKey** | **String** | The key used to merge notification for the same recipient and they have not been read yet | [optional] 
**collapseMethod** | **String** | The method of collapsing the notification, currently supported: collapse, replace and everything else defaults to collapse | [optional] 
**collapseTitle** | **String** | The title given to notification when more then one message with given collapse key is found %{count} : can be used in the String to indicate the number of messages | [optional] 
**collapseMessage** | **String** | The message given to notification when more then one message with given collapse key is found %{count} : can be used in the String to indicate the number of messages | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
**iconId** | **String** | The icon that should be showed with the notification, currently supported: \&quot;facebook, agenda, mailbounce, password, dossier, default\&quot; | [optional] 
**validTo** | **Date** | Date and time until which the notification should be shown | [optional] 
**priority** | **Number** | Deprecated since: 8-11-2019 - please use silent instead | [optional] 
**silent** | **Boolean** | Indicates whether the notifications should be shown in the web-interface | [optional] 
**recipient** | [**HermesRecipient**](HermesRecipient.md) |  | [optional] 
**read** | **Boolean** |  | [optional] 
