# NedapOnsApi.DossierMedicalAdvanceDirectivesContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**narrative** | **String** |  | [optional] 
**snomedExpressionValue** | **String** |  | [optional] 
**_date** | **Date** |  | [optional] 
**employeeId** | **Number** |  | [optional] 
**status** | **String** | The human readable status of the AdvanceDirective Context. | [optional] 
**statusKey** | [**DossierMedicalAdvanceDirectivesContextStatusKey**](DossierMedicalAdvanceDirectivesContextStatusKey.md) |  | [optional] 
**documentId** | **Number** |  | [optional] 
**documentName** | **String** |  | [optional] 
**decisionBuilders** | [**[DossierMedicalDecisionBuilder]**](DossierMedicalDecisionBuilder.md) | Used by the update and create api&#x27;s to build the Decisions of this AdvanceDirective Both the update and create api will only look at the builders and not at the decision list. | [optional] 
**decisions** | [**[DossierMedicalAdvanceDirectivesDecision]**](DossierMedicalAdvanceDirectivesDecision.md) | The decisions of the AdvanceDirective Context. | [optional] 
**immutable** | **Boolean** | Whether or not the context is immutable | [optional] 
