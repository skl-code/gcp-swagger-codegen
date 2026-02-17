# NedapOnsApi.CarepathModuleTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | The UUID of this module. May be used to reference an existing module if this module template is already part of another care path template | 
**name** | **String** | The name of the module | 
**duration** | **Number** | Duration in days | 
**precededBy** | **String** | UUID of care path module which precedes this module. | [optional] 
**offset** | **Number** | The offset in days | [optional] 
**intents** | [**[CarepathIntentTemplate]**](CarepathIntentTemplate.md) | The templates of intents contained in this module template | [optional] 
**templateRoot** | **Boolean** | This signifies that this module template may also be used without being embedded in a care path template. | [optional] [default to false]
