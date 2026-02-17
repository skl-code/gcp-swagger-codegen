# NedapOnsApi.PayrollPayableHoursAverage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **Number** | The average number of payable hours for the requested period for the specified employee. | 
**perDay** | **Boolean** | Indicating that the value is per day, or otherwise per week. | 
**dayOfWeek** | **Number** | ISO8601 day of week number, where Monday (1) is the first day of the week, and Sunday (7) is the last, idnicating which day of the week this {@code PayableHoursAverage} represents. Only set when {@code perDay} is {@code true} | [optional] 
**employeeId** | **Number** |  | 
**validFrom** | **Date** |  | [optional] 
**validTo** | **Date** | the last date for which this average is valid, inclusive | [optional] 
