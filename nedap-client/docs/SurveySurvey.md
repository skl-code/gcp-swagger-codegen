# NedapOnsApi.SurveySurvey

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**description** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**active** | **Boolean** |  | [optional] 
**useWorkflow** | **Boolean** |  | [optional] 
**useStrictEditAuthorization** | **Boolean** |  | [optional] 
**copyingAllowed** | **Boolean** |  | [optional] 
**signalNonClosed** | **Boolean** | Setting no longer provided by Ons Administratie 2016.5.0+ Instances of this questionaire need to be signaled on the dashboard when incomplete  | [optional] 
**signalTitle** | **String** | Setting no longer provided by Ons Administratie 2016.5.0+ Title of the dashboard signal  | [optional] 
**daysToExpiration** | **Number** | Setting no longer provided by Ons Administratie 2016.5.0+ Number of days the survey is valid  | [optional] 
**classificationId** | **String** |  | [optional] 
**surveyResults** | [**[SurveySurveyResult]**](SurveySurveyResult.md) |  | [optional] 
**categories** | [**[SurveyCategory]**](SurveyCategory.md) |  | [optional] 
**allowedToCreateExpertiseProfiles** | [**[ExpertiseProfile]**](ExpertiseProfile.md) |  | [optional] 
**allowedToEditExpertiseProfiles** | [**[ExpertiseProfile]**](ExpertiseProfile.md) |  | [optional] 
**allowedToViewExpertiseProfiles** | [**[ExpertiseProfile]**](ExpertiseProfile.md) |  | [optional] 
**expertiseProfilesAllowedToCreateSurvey** | [**[ExpertiseProfile]**](ExpertiseProfile.md) | Use allowedToCreateExpertiseProfiles instead | [optional] 
**expertiseProfilesAllowedToEditSurvey** | [**[ExpertiseProfile]**](ExpertiseProfile.md) | Use allowedToEditExpertiseProfiles instead | [optional] 
**expertiseProfilesAllowedToViewSurvey** | [**[ExpertiseProfile]**](ExpertiseProfile.md) | Use allowedToViewExpertiseProfiles instead | [optional] 
