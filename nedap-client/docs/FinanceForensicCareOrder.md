# NedapOnsApi.FinanceForensicCareOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Object identifier | [optional] 
**clientObjectId** | **Number** | The object identifier of the Client | [optional] 
**careOrderObjectId** | **Number** | The object identifier of the CareOrder | [optional] 
**plaatsingsbesluitnummer** | **String** | 9 digit number | [optional] 
**forensischeZorgtitel** | **String** | Codelijst https://www.vektis.nl/streams/standaardisatie/codelijsten/COD706-MVJ | [optional] 
**strafrechtketennummer** | **String** | 7 or 8 digits | [optional] 
**beginDate** | **Date** | Begin date | [optional] 
**endDate** | **Date** | End date. May be null if the forensic care order has not been &#x27;closed&#x27; | [optional] 
**type** | **String** | Empty or &#x27;DBBC&#x27; Deprecated since 18-02-2020, ForensicCareOrder no longer contains dbbc records, retrieve this data directly from ons-dbc | [optional] 
