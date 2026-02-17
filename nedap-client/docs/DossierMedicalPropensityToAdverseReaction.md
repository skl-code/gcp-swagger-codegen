# NedapOnsApi.DossierMedicalPropensityToAdverseReaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**causeBuilders** | [**[DossierMedicalCauseBuilder]**](DossierMedicalCauseBuilder.md) |  | [optional] 
**cause** | **String** | Deprecated since: 22-02-2022 - use causative_agent instead ( the &#x60;name&#x60; field of causative_agent is equivalent to the name of this cause(.destination.name) ) | [optional] 
**causativeAgent** | [**DossierMedicalEncodedConceptsCausativeAgent**](DossierMedicalEncodedConceptsCausativeAgent.md) |  | [optional] 
**manifestations** | **[String]** |  | [optional] 
**active** | **Boolean** |  | [optional] 
**specification** | **String** |  | [optional] 
**narrative** | **String** |  | [optional] 
**certainty** | **String** |  | [optional] 
**severity** | **String** |  | [optional] 
**course** | **String** |  | [optional] 
**onsetPeriodOfLife** | **String** |  | [optional] 
**onsetApproximateDate** | **String** |  | [optional] 
**diagnosis** | [**DossierSnomedClinicalFinding**](DossierSnomedClinicalFinding.md) |  | [optional] 
**feederAuditContentStore** | [**DossierFeederAuditContentStoreType**](DossierFeederAuditContentStoreType.md) |  | [optional] 
**feederAuditContentId** | **String** | Identifier referencing the original content in the feederAuditContentStore | [optional] 
**feederAuditSenderName** | **String** | Name of the sender of the original content | [optional] 
**feederAuditTransferType** | [**DossierFeederAuditTransferType**](DossierFeederAuditTransferType.md) |  | [optional] 
**immutable** | **Boolean** | Whether or not the propensity to adverse reaction is immutable | [optional] 
