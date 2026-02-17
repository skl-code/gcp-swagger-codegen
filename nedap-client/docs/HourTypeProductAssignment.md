# NedapOnsApi.HourTypeProductAssignment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID of this HourTypeProductAssignment | [optional] 
**productId** | **Number** | Id of the {@link Product} in the {@link CareOrderProduct} this assignment matches on. | [optional] 
**debtorId** | **Number** | Optional id of the {@link Debtor} this assignment matches on. | [optional] 
**hourTypeId** | **Number** | Id of the {@link HourType} this assignment belongs to. | [optional] 
**expertiseProfileId** | **Number** | Optional id of the {@link ExpertiseProfile} this assignment matches on. | [optional] 
**agbCode** | **String** | Optional AGB code this assignment matches on. | [optional] 
**rank** | **Number** | Rank of this assignment in the assignment matching sequence for the {@link HourType} this assignment belongs to. A lower number means a higher priority. | [optional] 
**declarableProductId** | **Number** | Id of the {@link Product} is used for invoicing when this assignment matches. | [optional] 
**leveringsvoorwaardePerClient** | **Boolean** | This field indicates if the leveringsvoorwaarde should be used when matching the assignment. It is only used for old AWBZ {@link CareOrder}s. | [optional] 
**beginDate** | **Date** | Begin date of the validity period for this assignment. | [optional] 
**endDate** | **Date** | End date of the validity period for this assignment. | [optional] 
**percentage** | **Number** | Percentage that this rule contributes to the final invoice | [optional] 
