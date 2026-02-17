# NedapOnsApi.OpenehrCompositionValues

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archetypeId** | **String** | The archetype id of the actual archetype of the composition | [optional] 
**versionedCompositionId** | **Number** | The numberic id of the versioned composition | [optional] 
**versionedCompositionUuid** | **String** | The UUID of the versioned composition | [optional] 
**ehrId** | **Number** | The numberic id of the EHR containing the versioned composition | [optional] 
**clientId** | **Number** | The id of the client in Ons Administratie to who this versioned composition belongs | [optional] 
**composerId** | **Number** | The numberic id of the person in Chiron who composed this composition | [optional] 
**composerName** | **String** | The name of the composer of this composition | [optional] 
**composerEmployeeId** | **Number** | The id of the employee in Ons Administratie who composed this composition | [optional] 
**timeCommitted** | **Date** | The date/time the latest composition version of this composition was committed | [optional] 
**firstEventTime** | **Date** | The date/time of the chronological first event in this composition | [optional] 
**lifecycleState** | **String** | State of this particular composition version with possible values: COMPLETE, INCOMPLETE, ABANDONED, INACTIVE, DELETED | [optional] 
**authorizedEmployeeGroupsForRead** | [**[OpenehrEmployeeGroup]**](OpenehrEmployeeGroup.md) | List of EmployeeGroups who are by allowed to read this composition. An empty list means all employees are allowed to read this composition. | [optional] 
**authorizedEmployeeGroupsForUpdate** | [**[OpenehrEmployeeGroup]**](OpenehrEmployeeGroup.md) | List of EmployeeGroups who are allowed to update this composition. An empty list means all employees are allowed to update this composition. | [optional] 
**valuesForPath** | [**[OpenehrCompositionValuesForPath]**](OpenehrCompositionValuesForPath.md) | List of requested paths with their values from the composition. | [optional] 
**itemTags** | [**[OpenehrItemTag]**](OpenehrItemTag.md) | List of {@link ItemTag}s connected to this composition. | [optional] 
