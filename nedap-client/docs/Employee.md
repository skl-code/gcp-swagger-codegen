# NedapOnsApi.Employee

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contractId** | **String** | Deprecated, this field is never set, use Contract APIs. | [optional] 
**mobilePhoneNumber** | **String** | Deprecated, this field is never set. | [optional] 
**authenticationMobilePhone** | **String** | The mobile phone number used for two-factor authentication messages. | [optional] 
**workMobilePhone** | **String** | The work mobile phone number of the employee. | [optional] 
**privateMobilePhone** | **String** | The private mobile phone number of the employee. | [optional] 
**homePhone** | **String** | The home phone number of the employee. | [optional] 
**homeEmailAddress** | **String** | The private email address of the employee. | [optional] 
**fixedHoursPerWeek** | **Number** | Deprecated, this field is never set, use Contract APIs. | [optional] 
**varHoursPerWeek** | **Number** | Deprecated, this field is never set, use Contract APIs. | [optional] 
**unknownEmployee** | **Boolean** | Indicates if this employee is the unknown employee. | [optional] 
**verifiedUntilDate** | **Date** | Date up to which the presence logs of this employee are verfied. | [optional] 
**limitedEmployee** | **Boolean** | Deprecated, this field is never set. | [optional] 
**uuid** | **String** | Type 4 Universally Unique Identifier of the employee. | [optional] 
**employeePrivacySettings** | [**EmployeePrivacySettings**](EmployeePrivacySettings.md) |  | [optional] 
**type** | **Number** | Type of the employee. Allowed values: 0: Regular 1: External | [optional] 
**teamName** | **String** | Name of the team the employee belongs to. | [optional] 
