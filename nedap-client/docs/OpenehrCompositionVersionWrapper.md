# NedapOnsApi.OpenehrCompositionVersionWrapper

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**uid** | **String** | The UID of the composition version with lexical form: &#x27;object_id::creating_system_id::version_tree_id&#x27; | [optional] 
**ehrId** | **Number** | The numberic id of the EHR containing the composition version | [optional] 
**versionedCompositionId** | **Number** | The id of the versionedComposition | [optional] 
**objectVersion** | **String** | The Composition version number as specified by openEHR. 1, 2, 3 for main versions, 1.1, 1.2, 1.3 for different branches, etc | 
**precedingVersionId** | **Number** | The composition version that precedes this composition version | [optional] 
**timeCommitted** | **Date** | Fetched from the contribution. Time that the composition was committed | 
**committerName** | **String** | Fetched from the contribution. Name of the committer of the composition | [optional] 
**committerEmployeeId** | **Number** | Fetched from contribution. Administratie employee id of the committer of the composition | [optional] 
**lifecycleState** | **String** | State of this particular composition version with possible values: COMPLETE, INCOMPLETE, DELETED | 
**composerName** | **String** | Name of the composer of this composition version | [optional] 
**composerEmployeeId** | **Number** | Administration employee id of the composer of the composition | [optional] 
**archetypeId** | **String** | The id of the archetype version contained in this composition version | 
**referenceModelObject** | **String** | The json RM object | [optional] 
**pathsAndValues** | **String** | Contents of this composition version in JSON format | [optional] 
**signature** | **String** | Digital signature of the committer | [optional] 
**attestationPending** | **Boolean** | True if this stored composition version is awaiting an attestation | [optional] 
