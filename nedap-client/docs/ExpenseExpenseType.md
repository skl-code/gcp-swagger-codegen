# NedapOnsApi.ExpenseExpenseType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** | The name of this expenseType | [optional] 
**unit** | **String** | The unit in which this expensetype is calculated (km or days) | [optional] 
**inputType** | **String** | The type of input used to input expenses made with this unit; an input field in case of kilometers or a checkbox in case of days | [optional] 
**format** | **String** | the format of the value in which an expense is stored in the database: 0 for decimal, 1 for float | [optional] 
**icon** | **String** | The path to the icon used for this expensetype. | [optional] 
**exportCode** | **String** | The exportcode for this expenseType | [optional] 
**exportCodeGreaterThanTen** | **String** | The exportcode for this expenseType used in case there are more than 10km a day | [optional] 
**compensationInCents** | **Number** | The compensation per km for this expensetype in Eurocents. Unless the EMIS export is used, the compensation in cents fields are for future use and have no effect | [optional] 
**compensationInCentsGreaterThanTen** | **Number** | The compensation per km for this expensetype in Eurocents used in case there are more than 10km a day. Unless the EMIS export is used, the compensation in cents fields are for future use and have no effect | [optional] 
**removed** | **Boolean** | A field denoting whether or not this expenseType has been removed | [optional] 
**travelCalculationEnabled** | **Boolean** | A field denoting whether or not travel distances should be calculated automatically | [optional] 
**beginDate** | **Date** | The begindate for this expenseType | [optional] 
**endDate** | **Date** | The enddate for this expenseType | [optional] 
**alternativeToTravelCalc** | **Boolean** |  | [optional] 
