# NedapOnsApi.OpenehrReferenceModelObjectWrapper

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**ehrId** | **Number** | Integer containing the ehrId. | [optional] 
**clientId** | **Number** | Integer containing the clientId. This might be empty, since a reference model object is primarily linked to an ehr. An EHR might not have a link to a cupido client, for example if a client is not known in Ons Administratie. | [optional] 
**archetypeId** | **String** | String containing the archetypeId of the archetype used. Example: \&quot;openEHR-EHR-CLUSTER.symptom_sign.v1.0.0\&quot; | [optional] 
**storedCompositionId** | **Number** | Long containing the storedCompositionId, referring to the id of the object in Chiron. Integer containing the storedCompositionId, referring to the id of the object in Chiron. | [optional] 
**versionedCompositionUuid** | **String** | UUID containing the versionedCompositionUuid, referring to the UUID of the object in Chiron. | [optional] 
**type** | **String** | String containing the type of object stored. Example: \&quot;composition\&quot;, \&quot;archetyped_object\&quot; or \&quot;temporary_composition\&quot; | [optional] 
**firstEventTime** | **Date** | DateTime of the first event that took place when the reference model was created. | [optional] 
**composerId** | **Number** | Long containing the composerId, referring to the composer of the object. Integer containing the composerId, referring to the composer of the object. Note: The composer is not always the same person as the person who commits the object. | [optional] 
**composerName** | **String** | String containing the composerName, referring to the composer of the object. Note: The composer is not always the same person as the person who commits the object. | [optional] 
**composerEmployeeId** | **Number** | Integer containing the employeeId in Ons Administratie of the composer. This can be empty when the composer is not known in Ons Administratie, or when just the name was recorded. Note: The composer is not always the same person as the person who commits the object. | [optional] 
**timeCommitted** | **Date** | Fetched from the contribution. Time that the composition was committed | [optional] 
**committerName** | **String** | String containing the name of the committer. Note: The committer is not always the same person as the person who composes the object. | [optional] 
**committerEmployeeId** | **Number** | Integer containing the employeeId in Ons Administratie of the committer. This can be empty when the committer is not known in Ons Administratie. The name of the committer is recorded in the committerName field. Note: The committer is not always the same person as the person who composes the object. | [optional] 
**authorizedForUpdate** | **Boolean** | Boolean to indicate that the current user is authorized to update this composition.  True if authorizedEmployeeGroupsForUpdate is empty or the current user is a member of one of the authorizedEmployeeGroupsForUpdate.  False if the user not a member of one of the authorizedEmployeeGroupsForUpdate.  Null if no user information is available. | [optional] 
**lifecycleState** | **String** | String containing the state of the ReferenceModelObject. Example: \&quot;COMPLETE\&quot;, \&quot;INCOMPLETE\&quot; or \&quot;DELETED\&quot; | [optional] 
**referenceModelObject** | **String** | String containing the JSON-blob with the actual OpenEHR Reference Object This is the actual referenceModelObject stored in Chiron, the openEHR database | [optional] 
**pathsAndValues** | **String** | String containing the summarized structure of the paths and values of an stored object. This contains the same information as a fully fledged ReferenceModelObject, but combined in one data-structure. Example: { \&quot;/content[id3]/data[id4]/items[id7]/value/defining_code\&quot;: \&quot;at2\&quot;, \&quot;/category/defining_code\&quot;: \&quot;at1\&quot;, \&quot;/content[id3]/data[id4]/items[id9]/value/value\&quot;: \&quot;2017-11-05T13:15:30Z\&quot;, } | [optional] 
**authorizedEmployeeGroupsForRead** | [**[OpenehrEmployeeGroup]**](OpenehrEmployeeGroup.md) | List of {@link EmployeeGroup}s who are by allowed to read this composition.  An empty list means all employees are allowed to read this composition. | [optional] 
**authorizedEmployeeGroupsForUpdate** | [**[OpenehrEmployeeGroup]**](OpenehrEmployeeGroup.md) | List of {@link EmployeeGroup}s who are allowed to update this composition.   An empty list means all employees are allowed to update this composition. | [optional] 
**itemTags** | [**[OpenehrItemTag]**](OpenehrItemTag.md) | List of {@link ItemTag}s connected to this ReferenceModelObject. | [optional] 
**instructions** | [**[OpenehrInstruction]**](OpenehrInstruction.md) | List of instructions in the returned composition. | [optional] 
