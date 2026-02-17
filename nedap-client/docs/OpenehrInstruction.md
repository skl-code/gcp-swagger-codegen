# NedapOnsApi.OpenehrInstruction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instructionCompositionId** | **Number** | Integer containing the id of the composition containing the instruction | [optional] 
**instructionCompositionUuid** | **String** | UUID of the composition containing the instruction | [optional] 
**instructionCompositionArchetypeId** | **String** | The archetype id of the composition archetype the instruction is created from. | [optional] 
**instructionArchetypeId** | **String** | The archetype id of the instruction archetype this instruction is created from. | [optional] 
**pathFromCompositionRoot** | **String** | String containing the path where the instruction is located from the root of the composition containing it. | [optional] 
**aggregatedState** | [**OpenehrInstructionState**](OpenehrInstructionState.md) |  | [optional] 
**receiverMatchesUser** | **Boolean** | Boolean to indicate whether the requesing user is a receiving person or part of a receiving employee group. | [optional] 
**receivers** | [**[OpenehrReceiver]**](OpenehrReceiver.md) | List of objects containing information about the receiver of the instruction. | [optional] 
