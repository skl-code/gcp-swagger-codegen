# NedapOnsApi.FinanceProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**productCode** | **String** | Product code as defined by standards, i.e., as filled in for declarations and invoices. Not set for self-defined (non declaration standard) products (i.e., custom invoicing), or grouped products (municipality product groups). Primary care products are an exception here in that they use the code field for this. | [optional] 
**code** | **String** | Product code, when defined it can be used for importing (xml). Primary care products use this field for the declaration standard. | [optional] 
**userIdentifier** | **String** |  | [optional] 
**type** | **Number** | Indicates a type of product; 0, 5             &#x3D; self defined 1, 2, 3, 4       &#x3D; WLZ 6                &#x3D; DBC 7                &#x3D; primary care 8                &#x3D; municipality 9                &#x3D; product category (for JW/WMO) 10, 11           &#x3D; forensic care 12, 13, 14, 15   &#x3D; *GGZ | [optional] 
**description** | **String** |  | [optional] 
**financeTypeId** | **Number** |  | [optional] 
**beginDate** | **Date** |  | [optional] 
**endDate** | **Date** |  | [optional] 
**declarable** | **Boolean** |  | [optional] 
