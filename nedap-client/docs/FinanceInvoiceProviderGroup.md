# NedapOnsApi.FinanceInvoiceProviderGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Reference to export profile (where this model is based on). | [optional] 
**beginDate** | **Date** | Begin date from which this &#x27;koepel&#x27; has been active. | [optional] 
**active** | **Boolean** | Whether the invoice provider group is currently active. In case it is not active it has been inactive since &#x27;updatedAt&#x27;. | [optional] [default to false]
**updatedAt** | **Date** | When the last change has been made. | [optional] 
**koepelCode** | **String** | Code that will be used as &#x27;koepel&#x27; to group a set of providers. | [optional] 
**debtorIds** | **[Number]** | When empty no filter should be applied, otherwise a filter for which this &#x27;koepel&#x27; is applicable. | [optional] 
**providers** | **[String]** | When empty, all providers are part of the &#x27;koepel&#x27; otherwise a set of providers that are part of the &#x27;koepel&#x27;. | [optional] 
