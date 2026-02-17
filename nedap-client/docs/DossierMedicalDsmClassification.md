# NedapOnsApi.DossierMedicalDsmClassification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**findings** | [**[DossierMedicalDsmFinding]**](DossierMedicalDsmFinding.md) | The findings belonging to this classification | [optional] 
**evaluations** | [**[DossierMedicalDsmEvaluation]**](DossierMedicalDsmEvaluation.md) | The evaluations belonging to this classification | [optional] 
**beginDate** | **Date** | The begin date of the classification phase | [optional] 
**endDate** | **Date** | The end date of the classification phase | [optional] 
**classificationDate** | **Date** | The date the classification was determined | [optional] 
**status** | **String** | The status of the classification phase | [optional] 
**diagnosisDescription** | **String** | The descriptive diagnosis | [optional] 
**parentId** | **Number** | The classification phase this classification was derived from | [optional] 
**childId** | **Number** | The classification phase that was derived from this classification | [optional] 
**immutable** | **Boolean** | Whether or not the classification is immutable | [optional] 
**axis3weight** | **Number** | The weight of the axis 3 findings | [optional] 
**gafStart** | **Number** | The start GAF score | [optional] 
**gafCurrent** | **Number** | The current GAF score | [optional] 
**gafMax** | **Number** | The maximum GAF score | [optional] 
**gafEnd** | **Number** | The end GAF score | [optional] 
**classificationSeriesId** | **Number** | The series this classification is a part of | [optional] 
