# NedapOnsApi.DossierMedicalProblem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**narrative** | **String** |  | [optional] 
**starred** | **Boolean** |  | [optional] 
**onsetApproximateDate** | **String** |  | [optional] 
**resolvedApproximateDate** | **String** |  | [optional] 
**snomedExpressionValue** | **String** |  | [optional] 
**active** | **Boolean** |  | [optional] 
**relevant** | **Boolean** |  | [optional] 
**certainty** | **String** |  | [optional] 
**severity** | **String** |  | [optional] 
**course** | **String** |  | [optional] 
**onsetPeriodOfLife** | **String** |  | [optional] 
**expertiseProfileIds** | **[Number]** |  | [optional] 
**authorizedExpertiseProfileIds** | **[Number]** | Only users with these expertise profiles are allowed to access this problem Use expertiseProfileIds until implemented in Dossier | [optional] 
**authorizedExpertiseGroupIds** | **[Number]** | Only users with these expertise groups are allowed to access this problem Use expertiseProfileIds until implemented in Dossier | [optional] 
**episodeId** | **Number** |  | [optional] 
**episodeIds** | **[Number]** | The episodes that are linked to this problem | [optional] 
**diagnosisBuilders** | [**[DossierMedicalDiagnosisBuilder]**](DossierMedicalDiagnosisBuilder.md) |  | [optional] 
**diagnoses** | [**[DossierMedicalDiagnosis]**](DossierMedicalDiagnosis.md) |  | [optional] 
**immutable** | **Boolean** | Whether or not the problem is immutable | [optional] 
**feederAuditContentStore** | [**DossierFeederAuditContentStoreType**](DossierFeederAuditContentStoreType.md) |  | [optional] 
**feederAuditContentId** | **String** | Identifier referencing the original content in the feederAuditContentStore | [optional] 
**feederAuditSenderName** | **String** | Name of the sender of the original content | [optional] 
**feederAuditTransferType** | [**DossierFeederAuditTransferType**](DossierFeederAuditTransferType.md) |  | [optional] 
