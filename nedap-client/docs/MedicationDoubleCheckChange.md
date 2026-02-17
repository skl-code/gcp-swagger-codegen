# NedapOnsApi.MedicationDoubleCheckChange

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Uniquely designates the DoubleCheckChange. | [optional] 
**doubleCheckUuid** | **String** | Reference to the DoubleCheck which was changed. | [optional] 
**senderEmployeeId** | **Number** | Employee who requested the double check. | [optional] 
**checkerEmployeeId** | **Number** | Employee who performed the double check. | [optional] 
**decision** | **String** | Decision made by a checker about this double check. See DoubleCheck for valid values. | [optional] 
**decisionReason** | **String** | Optional reason why the decision was made. This is mostly used when a double check was rejected because there was not enough information. | [optional] 
**decisionAt** | **Date** | Time at which the decision was set by the checker. | [optional] 
