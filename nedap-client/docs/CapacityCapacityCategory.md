# NedapOnsApi.CapacityCapacityCategory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** |  | 
**financeType** | [**FinanceFinanceType**](FinanceFinanceType.md) |  | 
**productObjectId** | **Number** | The objectId of the {@link com.nedap.healthcare.domain.finance.Product} instance on which this category is based. | 
**capacityExpertiseProfileAssignments** | [**[CapacityCapacityExpertiseProfileAssignment]**](CapacityCapacityExpertiseProfileAssignment.md) | Set of all {@link CapacityExpertiseProfileAssignment} instances this category contains. | [optional] 
**capacityExpertiseGroupAssignments** | [**[CapacityCapacityExpertiseGroupAssignment]**](CapacityCapacityExpertiseGroupAssignment.md) | Set of all {@link CapacityExpertiseGroupAssignment} instances this category contains. | [optional] 
**profileObjectId** | **Number** | The objectId of the {@link CapacityProfile} that this category belongs to. | 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
