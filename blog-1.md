Blog 1 : 
Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

answer: 
"any" basically  turn off the type system . the compiler allows any operation on value . that means you lose type checking . bug can slip through silently , thats why it is called a type safety hole . 

"unknown" is also a type that can held anything it forces you to be explicit before using the value. thats why is is more safer that "any" type.

type narrowing is the process of refining a board or union type into more specific one within a conditional block.

