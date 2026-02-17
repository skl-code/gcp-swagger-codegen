# NedapOnsApi.OpenehrLinkedReferenceModelObjectWrapper

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourcePath** | **String** | String containing the path from where the link is made. Example: \&quot;/\&quot; or \&quot;/content[id0.2]/data[id2]/events[id3]\&quot;. | [optional] 
**targetEhrUri** | **String** | String containing the full target EHR URI of the link. Note: Some characters might be escaped, e.g. square brackets can be %5B and %5D and spaces can be %20. Example: \&quot;ehr:/32/compositions/42\&quot; or \&quot;ehr:compositions/20/content[id0.2]/data[id2]/events[id3]/data[id4]/items[id5.1]\&quot; or \&quot;ehr:compositions/20/content%5Bid0.2%5D/data%5Bid2%5D/events%5Bid3%5D/data%5Bid4%5D/items%5Bid5.1%5D\&quot;. | [optional] 
**targetPathInsideTopLevelStructure** | **String** | String containing target path inside the top level structure (composition). Null when linked to the composition root. Note: This will not contain escaped characters. Example: \&quot;/content[id0.2]/data[id2]/events[id3]/data[id4]/items[id5.1]\&quot;. | [optional] 
**linkMeaningValue** | **String** | String containing meaning value of the link. Example: \&quot;related information\&quot;. | [optional] 
**linkTypeValue** | **String** | String containing type value of the link. Example: \&quot;intake\&quot;. | [optional] 
