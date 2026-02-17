# NedapOnsApi.DossierOmahaOmahaClassification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**clientId** | **Number** | Object id of the related client | [optional] 
**status** | [**DossierOmahaClassificationStatus**](DossierOmahaClassificationStatus.md) |  | [optional] 
**beginDate** | **Date** |  | [optional] 
**endDate** | **Date** |  | [optional] 
**careplanId** | **Number** | Object id of the related careplan (nl) Object id van het gerelateerde zorgplan | [optional] 
**surveyResultId** | **Number** | Object id of the related survey (nl) Object id van de gerelateerde vragenlijst | [optional] 
**omahaClassifiedProblems** | [**[DossierOmahaClassifiedProblem]**](DossierOmahaClassifiedProblem.md) | (nl) Gerelateerde Omaha &#x27;gebieden&#x27; | [optional] 
**viewAllowed** | **Boolean** | Used for rights | [optional] 
**editAllowed** | **Boolean** | Used for rights | [optional] 
**copyAllowed** | **Boolean** | Used for rights | [optional] 
**changeStatusAllowed** | **Boolean** | Used for rights | [optional] 
**printAllowed** | **Boolean** | Used for rights | [optional] 
**quantifyAllowed** | **Boolean** | Used for rights | [optional] 
**intakeQuestions** | [**[SurveyAnsweredQuestion]**](SurveyAnsweredQuestion.md) | (nl) Aanleiding | [optional] 
