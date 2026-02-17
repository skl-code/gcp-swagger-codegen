# NedapOnsApi.DossierEpisodesEpisode

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Object id of this episode | [optional] 
**clientId** | **Number** | Client object id this episode belongs too | [optional] 
**startDate** | **Date** | Start date of this episode | [optional] 
**endDate** | **Date** | End date of this episode | [optional] 
**evaluationDate** | **Date** | Evaluation date of this episode | [optional] 
**goal** | **String** | Goal description of this episode | [optional] 
**title** | **String** | Title of this episode | [optional] 
**important** | **Boolean** | Marked as important | [optional] 
**marked** | **Boolean** | Marked as relevant | [optional] 
**subGoals** | [**[DossierEpisodesSubGoal]**](DossierEpisodesSubGoal.md) | Sub goals of this episode | [optional] 
**problemIds** | **[Number]** | Medical problems that are linked to this episode | [optional] 
**surveyResults** | [**[SurveySurveyResult]**](SurveySurveyResult.md) | Object ids of the survey results that are linked to this episode | [optional] 
**documents** | [**[Document]**](Document.md) | Object ids of the documents that are linked to this episode | [optional] 
**expertiseProfileIds** | **[Number]** | Only users with these expertise profiles are allowed to access this episode; authorzationIds | [optional] 
**authorizedExpertiseProfileIds** | **[Number]** | Only users with these expertise profiles are allowed to access this episode | [optional] 
**authorizedExpertiseGroupIds** | **[Number]** | Only users with these expertise groups are allowed to access this episode | [optional] 
**linkedExpertiseProfileIds** | **[Number]** | Users with these linked expertise profiles are connected to this episode | [optional] 
**linkedExpertiseGroupIds** | **[Number]** | Users with these linked expertise groups are connected to this episode | [optional] 
