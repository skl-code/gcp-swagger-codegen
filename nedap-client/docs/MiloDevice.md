# NedapOnsApi.MiloDevice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Id of the Device | [optional] 
**employeeObjectId** | **Number** | Id of the employee this device belongs to | [optional] 
**deviceCode** | **String** | Device code (uuid) | [optional] 
**description** | **String** | Description with the name of the device | [optional] 
**accessedAt** | **Date** | Datetime | [optional] 
**userAgent** | **String** | Deprecated since: 14-03-2019 - use the userAgent field of Cupido::Milo::App | [optional] 
**supportsOneTimePassword** | **Boolean** | Boolean if this devices supports one time password | [optional] 
**apps** | [**[MiloApp]**](MiloApp.md) | A list of apps linked to the device | [optional] 
**deletedAt** | **Date** | The time when the device was deleted. Null otherwise. | [optional] 
