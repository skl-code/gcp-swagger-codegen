# NedapOnsApi.ExpenseExpenseDistance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**description** | **String** | Description relevant to this distance, e.g. \&quot;Home\&quot; or client name | [optional] 
**commute** | **Boolean** | Is this distance part of commute traffic, i.e. was the previous address &#x27;home&#x27;, or is the next? | [optional] 
**distance** | **Number** | The distance traveled to get to this {@link #position}. The unit is kilometers. | [optional] 
**position** | [**RegistrationPosition**](RegistrationPosition.md) |  | [optional] 
