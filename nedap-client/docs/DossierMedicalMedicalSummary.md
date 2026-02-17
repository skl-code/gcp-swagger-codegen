# NedapOnsApi.DossierMedicalMedicalSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **Number** | The ID of the client the medical summary belongs to | [optional] 
**legalStatus** | [**DossierMedicalInvoluntaryCareLegalStatus**](DossierMedicalInvoluntaryCareLegalStatus.md) |  | [optional] 
**legalStatuses** | [**[DossierMedicalInvoluntaryCareLegalStatus]**](DossierMedicalInvoluntaryCareLegalStatus.md) | The list of current legal statuses of the client. Current Legal Statuses have an overlapping date range with &#x27;today&#x27;, are not archived, and do not have the &#x27;request&#x27; flag set. | [optional] 
**medicalPolicy** | [**DossierMedicalAdvanceDirectivesContext**](DossierMedicalAdvanceDirectivesContext.md) |  | [optional] 
**resuscitationDecision** | [**DossierMedicalAdvanceDirectivesResuscitationDecision**](DossierMedicalAdvanceDirectivesResuscitationDecision.md) |  | [optional] 
**problems** | [**[DossierMedicalProblem]**](DossierMedicalProblem.md) | A list of medical problems for this client | [optional] 
**adverseReactions** | [**[DossierMedicalPropensityToAdverseReaction]**](DossierMedicalPropensityToAdverseReaction.md) | A list of adverse reactions for this client | [optional] 
**simplifiedAdverseReactions** | [**[DossierMedicalSimplifiedPropensityToAdverseReaction]**](DossierMedicalSimplifiedPropensityToAdverseReaction.md) | A list of simplified propensities to adverse reactions (suspicions) for this client | [optional] 
**allergies** | [**[DossierMedicalPropensityToAdverseReaction]**](DossierMedicalPropensityToAdverseReaction.md) | A list of allergies for this client | [optional] 
**incompetences** | [**[DossierMedicalInvoluntaryCareIncompetence]**](DossierMedicalInvoluntaryCareIncompetence.md) | A list of incompetences for this client | [optional] 
**episodes** | [**[DossierEpisodesEpisode]**](DossierEpisodesEpisode.md) | A list of episodes for this client | [optional] 
**alerts** | [**[DossierAlert]**](DossierAlert.md) | A list of alerts for this client | [optional] 
**medicalNotes** | [**[DossierMedicalNote]**](DossierMedicalNote.md) | A list of medical notes for this client | [optional] 
**metadata** | [**DossierMedicalMedicalSummaryMetadata**](DossierMedicalMedicalSummaryMetadata.md) |  | [optional] 
