# NedapOnsApi.ClientStoryChangeSet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **Date** | Timestamp of this changeset | [optional] 
**source** | **String** | The source that made the changes in this changeset Can be Caren or Dossier | [optional] 
**userId** | **Number** | The user id that made the changes. Can refer to the user id or the caren person id depending on the source | [optional] [default to 0]
**changes** | [**[ClientStoryChange]**](ClientStoryChange.md) | A list of all changes in this changeset | [optional] 
