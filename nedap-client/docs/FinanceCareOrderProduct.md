# NedapOnsApi.FinanceCareOrderProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**careOrderId** | **Number** | ID of the care order this care order product belongs to. | [optional] 
**userIdentifier** | **String** |  | [optional] 
**quantity** | **Number** | Deprecated since: 14-03-2019 | [optional] 
**quantityUnit** | **String** | Deprecated since: 14-03-2019 | [optional] 
**magnitudeQuantityValue** | **Number** | Care order products have a magnitude of the form: [quantityValue] of [unitQuantity] [unitType] per [frequency]. For example 30 * 1 minute per week. This value represents the quantityValue part and is mandatory. | [optional] 
**magnitudeUnitQuantity** | **Number** | Care order products have a magnitude of the form: [quantityValue] of [unitQuantity] [unitType] per [frequency]. For example 30 * 1 minute per week. This value represents the unitQuantity part and it can be omitted. In most cases this is 1. | [optional] 
**magnitudeUnitType** | **String** | Care order products have a magnitude of the form: [quantityValue] of [unitQuantity] [unitType] per [frequency]. For example 30 * 1 minute per week. This value represents the unitType part and it can be omitted. The following values are supported:   - EURO_CENT   - PIECE   - MINUTE   - HOUR | [optional] 
**magnitudeFrequency** | **String** | Care order products have a magnitude of the form: [quantityValue] of [unitQuantity] [unitType] per [frequency]. For example 30 * 1 minute per week. This value represents the frequency part and it can be omitted. The following values are supported:   - PER_DAG   - PER_WEEK   - PER_VIER_WEKEN   - PER_MAAND   - PER_JAAR   - PER_TRAJECT | [optional] 
**comments** | **String** | Comments, generally only used by old pre-2015 AWBZ care order products. | [optional] 
**productId** | **Number** | ID of the product that this care order product is for | [optional] 
**financeTypeId** | **Number** | ID of the finance type this care order product belongs to. | [optional] 
**instellingsCode** | **String** | AGB code of the care provider responsible for handling this care order product | [optional] 
**functietype** | **String** | Deprecated: field was never set. | [optional] 
**debtorId** | **Number** | ID of the debtor that this care order product belongs to. | [optional] 
**beginDate** | **Date** | Original begin date of the care order product, the time component is ignored, and considered to be 00:00:00. | [optional] 
**endDate** | **Date** | Original end date of the care order product, the time component is ignored, and considered to be 23:59:59. | [optional] 
**clippedBeginDate** | **Date** | Begin date of the care order product after clipping (vegen), the time component is ignored, and considered to be 00:00:00. | [optional] 
**clippedEndDate** | **Date** | End date of the care order product after clipping (vegen), the time component is ignored, and considered to be 23:59:59. | [optional] 
