# NedapOnsApi.OpenehrEmployeeGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**employeeGroupType** | **String** | Type of employee group, e.g. EXPERTISE_PROFILE or EXPERTISE_GROUP. | [optional] 
**originatingSystemId** | **String** | Originating system of the employee group, e.g. Administratie. | [optional] 
**originatingSystemItemId** | **String** | Id of the employee group in the originating system. | [optional] 
**parentGroups** | [**[OpenehrEmployeeGroup]**](OpenehrEmployeeGroup.md) | List of direct parents of the employee group. | [optional] 
**childGroups** | [**[OpenehrEmployeeGroup]**](OpenehrEmployeeGroup.md) | List of direct children of the employee group. | [optional] 
**name** | **String** | Name of the employee group. | [optional] 
**beginDate** | **Date** | Begin date of the employee group. | [optional] 
**endDate** | **Date** | End date of the employee group. | [optional] 
**deleted** | **Boolean** | Boolean to indicate that this employee group is deleted. | [optional] 
**visible** | **Boolean** | Boolean to indicate that this employee group is visible. | [optional] 
**allowDossierActions** | **Boolean** | Boolean to indicate that this employee group is allowed to create reports with actions. Boolean is null if the employeeGroupType is not EXPERTISE_PROFILE. | [optional] 
**allowDossierConfidential** | **Boolean** | Boolean to indicate that this employee group is allowed to create confidential reports. Boolean is null if the employeeGroupType is not EXPERTISE_PROFILE. | [optional] 
