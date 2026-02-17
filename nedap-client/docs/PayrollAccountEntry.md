# NedapOnsApi.PayrollAccountEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**employeeId** | **Number** |  | [optional] 
**_date** | **Date** |  | [optional] 
**minutes** | **Number** |  | [optional] 
**reason** | **String** |  | [optional] 
**comment** | **String** |  | [optional] 
**accountTypeId** | **Number** |  | [optional] 
**subType** | [**PayrollSubType**](PayrollSubType.md) |  | [optional] 
**absolute** | **Boolean** |  | [optional] 
**correction** | **Boolean** |  | [optional] 
**verified** | **Boolean** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
**reasonAsText** | **String** |  | [optional] 
**includedInStartingBalance** | **Boolean** | Used to mark an accountEntry that is already included in the starting balance account amount. Will only be set to true when the account entry is set on the exact same date and time as the start of the requested period. | [optional] 
