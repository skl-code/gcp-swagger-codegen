# NedapOnsApi.Insurance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**registrationNumber** | **String** | Registration number, required if sourceType is other than SYSTEM. | [optional] 
**clientObjectId** | **Number** | Client objectId. | 
**debtorObjectId** | **Number** | Debtor objectId. | 
**insurer** | [**Debtor**](Debtor.md) |  | [optional] 
**sourceType** | **Number** | Source type. Possible values: &lt;pre&gt; 0 (System defined) 1 (Manual) 2 (Third parties) 3 (Vecozo) 4 (XML import) &lt;/pre&gt; | 
**insuranceType** | [**InsuranceType**](InsuranceType.md) |  | 
**packageCode** | **String** | Package code, required if sourceType is VECOZO. | [optional] 
**packageName** | **String** | Package name, required if sourceType is VECOZO. | [optional] 
**labelCode** | **String** | Label code, must be a label of debtor. Required if sourceType is VECOZO. | [optional] 
**labelName** | **String** | Label name, must be a label of debtor. Required if sourceType is VECOZO. | [optional] 
**requestedDate** | **Date** | Requested date, required if sourceType is VECOZO. | [optional] 
**clientIsDead** | **Boolean** | Indicates client is deceased. | [optional] 
**comments** | **String** | Comments. | [default to &#x27;&#x27;]
**beginDate** | **Date** | Begin date. | 
**endDate** | **Date** | End date. | [optional] 
**careProviderObjectId** | **Number** | Care provider objectId. | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
