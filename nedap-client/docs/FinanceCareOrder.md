# NedapOnsApi.FinanceCareOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**userIdentifier** | **String** | Identification number of this care order, provided by the user, or in some cases derived from the lawIdentification. | [optional] 
**clientIdentifier** | **String** | Legal identifier of the client this care order belongs to. This is not necessarily the same as the client number of the client. | [optional] 
**beschikkingsNummer** | **String** | Deprecated since: 23-07-2021 use lawIdentification instead | [optional] 
**lawIdentification** | **String** | Identification number of this care order, provided by the authority that issued this care order. | [optional] 
**indicatieorgaanCode** | **String** | Code of the indicatieorgaan that issued this care order, only used by old pre-2015 AWBZ care orders. | [optional] 
**aanvraagNummer** | **String** | Request number for the care order (if applicable). | [optional] 
**issueDate** | **Date** | Date and time this care order was issued. In particular important for the clipping (veeg) mechanism. | [optional] 
**contactPerson** | **String** | Contact person, only used by old pre-2015 AWBZ care orders. | [optional] 
**comments** | **String** | Comments, generally only used by old pre-2015 AWBZ care orders. | [optional] 
**beginDate** | **Date** | Begin date of the care order, the time component is ignored, and considered to be 00:00:00. | [optional] 
**endDate** | **Date** | End date of the care order, the time component is ignored, and considered to be 23:59:59. | [optional] 
**clientId** | **Number** | ID of the client this care order belongs to. | [optional] 
**financeTypeId** | **Number** | ID of the finance type this care order belongs to. | [optional] 
**debtorId** | **Number** | ID of the debtor that this care order belongs to. | [optional] 
**careOrderProducts** | [**[FinanceCareOrderProduct]**](FinanceCareOrderProduct.md) |  | [optional] 
