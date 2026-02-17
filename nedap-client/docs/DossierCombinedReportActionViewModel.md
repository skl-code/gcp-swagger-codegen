# NedapOnsApi.DossierCombinedReportActionViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receivers** | [**[DossierCombinedReportActionReceiverViewModel]**](DossierCombinedReportActionReceiverViewModel.md) | List of receivers of the report action, which the report action is assigned to. | 
**completable** | **Boolean** | Set to true if the current user is a able to complete the action (matches the receiver, not completed yet and has the rights to complete the action) | 
**completed** | **Boolean** | Set to true if the action is completed | 
**completedAt** | **Date** | Time when the action was completed. Empty if it has not been completed yet. | [optional] 
**completedByEmployeeId** | **Number** | ID of the employee who completed this action. Empty if it has not been completed yet. | [optional] 
