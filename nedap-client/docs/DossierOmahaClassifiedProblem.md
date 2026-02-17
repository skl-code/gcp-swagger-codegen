# NedapOnsApi.DossierOmahaClassifiedProblem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**omahaClassificationId** | **String** |  | [optional] 
**clientId** | **Number** |  | [optional] 
**ratingKnowledgeStart** | **Number** | (nl) Huidige score kennis | [optional] 
**ratingBehaviorStart** | **Number** | (nl) Huidige score gedrag | [optional] 
**ratingStatusSignalsStart** | **Number** | (nl) Huidige score status signaal | [optional] 
**ratingKnowledgeTarget** | **Number** | (nl) Streef score kennis | [optional] 
**ratingBehaviorTarget** | **Number** | (nl) Streef score gedrag | [optional] 
**ratingStatusSignalsTarget** | **Number** | (nl) Streef score status signaal | [optional] 
**modifierReach** | [**DossierOmahaModifierReach**](DossierOmahaModifierReach.md) |  | [optional] 
**modifierProblemLevel** | [**DossierOmahaModifierProblemLevel**](DossierOmahaModifierProblemLevel.md) |  | [optional] 
**additionalInfo** | **String** | (nl) Toelichting | [optional] 
**omahaProblem** | [**DossierOmahaProblem**](DossierOmahaProblem.md) |  | [optional] 
**omahaClassifiedSignsAndSymptoms** | [**[DossierOmahaClassifiedSignOrSymptom]**](DossierOmahaClassifiedSignOrSymptom.md) | (nl) Bijbehorende omaha &#x27;signalen en symptomen&#x27; | [optional] 
**omahaClassifiedInterventions** | [**[DossierOmahaClassifiedIntervention]**](DossierOmahaClassifiedIntervention.md) | (nl) Bijbehorende omaha &#x27;acties&#x27; | [optional] 
