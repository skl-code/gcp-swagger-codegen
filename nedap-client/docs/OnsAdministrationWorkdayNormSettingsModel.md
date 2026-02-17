# NedapOnsApi.OnsAdministrationWorkdayNormSettingsModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claDefault** | **Boolean** | If true, these settings are the default from the collective labour agreement | [optional] 
**employeeObjectId** | **Number** | The employee object id | 
**endDate** | **Date** | The end date of the period during which this setting is valid | [optional] 
**id** | **Number** | The object id of the settings, required for UPDATE | [optional] 
**normPeriod** | **Number** | The measurement period in weeks to evaluate if the workday norm is breached. Required when optOut is false | [optional] 
**optOut** | **Boolean** | If true, the employee is opted out of the workday norm | [optional] 
**startDate** | **Date** | The start date of the period during which this setting is valid | 
**workdayNorm** | **Number** | DEPRECATED: use workdayNormTotal instead. The maximum number of workdays the employee has to work in a week | [optional] 
**workdayNormTotal** | **Number** | The total number of workdays the employee has to work in the whole measurement period. Required when optOut is false | [optional] 
