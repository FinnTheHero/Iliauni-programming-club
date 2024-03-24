---
title: "Bomb Lab"
description: "CheatSheet and guide for bomb lab"
pubDate: "Mar 24 2024"
author: FinnTheHero
---

# Guide

"bomb lab" is a common assignment or project in computer systems or computer architecture courses. It's designed to teach students about reverse engineering, debugging, and understanding assembly language and low-level programming concepts.

## What do i do ?
1. `The Bomb`: First off, you're given this mysterious computer program, which your teacher calls the "bomb." It's like a puzzle box with a twist – if you don't solve it correctly, it "explodes" (figuratively, of course!).
2. `Your Mission`: Your job is to figure out how to stop this bomb from "exploding." But here's the catch: it's not as simple as pressing a button. You've got to dig deep into the inner workings of this program to find out what makes it tick.
3. `Deciphering the Code`: Inside the bomb is a bunch of secret instructions written in a special language that computers understand. It's like trying to decode a secret message. You've got to carefully read through these instructions to understand what the bomb is trying to do.
4. `Finding Clues`: As you go through the instructions, you might find some clues – like little breadcrumbs that lead you to the solution. Maybe there are certain words or numbers that seem important, or patterns that catch your eye.
5. `Trial and Error`: Now comes the not so fun part (For most of you) – testing things out! You might try different combinations of words or numbers to see what happens. It's like solving a puzzle – you try something, see if it works, and if it doesn't, you try something else.
6. `Using Tools`: Sometimes, you need a little help from some special tools. Imagine having a magic magnifying glass that lets you see inside the bomb and understand what's going on. These tools help you peek under the hood of the program and see how it works. (Referring to GDB)
7. `Success!`: After some trial and error, and maybe a few head-scratching moments, you finally figure it out! You've cracked the code and defused the bomb. It's like solving a really tricky riddle – when you finally get it, there's a sense of satisfaction and relief.

## Before Debugging
### How to save answers
You might as well make some file, call it solutions or what i prefer: `defuse_kit.txt`.
You will use this file to save answers for 6 phases you go thru, instead of typing answers on each test of bomb you will run program with this file `./bomb answers.txt` this will automatically take answers in following order: first line for first phase, second line for second phase and so on.
When you find answer, you place it inside this file.

### Then what ?
You will need to see the actuall assembly code so you know what you are dealing with, for this we will first dump assembly out of this bomb:
```bash
objdump -d bomb > bomb.s
```
This will put every assembly instruction from the bomb, into the file called `bomb.s`.
you can now use text editor in terminal (Vim, Vi, Nano, NeoVim . . .) to see the assembly code.

## Debugging stage
1. `Phase 1` requires some string. You can try searching thru executable's strings using following command:
```bash
strings <file>
```
> Advice: try to look for out-of-place sentence.
2. `Phase 2` is mostly assembly code, you will read the code and use cheatsheet bellow to go step by step and see what its doing. In this phase answer is most likely 6 numbers (If you look closely its taking in 6 numbers). Usually numbers start from 1 but it may vary depending on your case. **Use `i r` often to track changes in registers.**

3. `Phase 3` is same as second one, but here you only need 2 numbers. Code looks like it might have switch case but in most cases it skips this switch entirely. This phase has simple addition and subtraction. Go thru it step by step, it is easier than it looks. **Look for jump instructions. You can find which jump instruction means what in cheatsheet bellow.**

4. `Phase 4` same as the 2 above, but with a slight twist: this one is not alone. In this phase you will have another function called `func4` which will return some number, you need to look for that number it might be the answer. This phase needs 2 numbers as answer as well.

5. `Phase 5`, This is where actuall brain-wack starts.

6. `Phase 6` requires 6 numbers as answer, look out your answer might be inverted in one of the variants.

7. `Secret Phase`. look closely in assembly dump, you might find some hidden things :3 DrEvil must've left some hidden things there... or so they say...

---

# CheatSheet

## Start:
- `gdb`: Start gdb
- `gdb <file>`: Start gdb with a specific file

## Run:
- `run`: Run program
- `run 1 2 3`: Run program with command-line arguments 1 2 3
- `run <file>`: Run program with a specific file

## Stop:
- `kill`: Stop the program
- `quit`: Exit gdb
- `Ctrl + D`: Exit gdb (Note: Ctrl + C does not exit from gdb, but halts the current gdb command)

## Breakpoint
> Breakpoints are stopping points, you can stop at any place in code and see what its doing behind the scenes
- `break sum`: Set breakpoint at the entry to function sum
- `break *0x80483c3`: Set breakpoint at address 0x80483c3
- `delete 1`: Delete breakpoint 1
- `disable 1`: Disable the breakpoint 1 (gdb numbers each breakpoint you create)
- `enable 1`: Enable breakpoint 1
- `delete`: Delete all breakpoints
- `clear sum`: Clear any breakpoints at the entry to function sum

## Execute
> Meaning: start debugging your program
- `stepi` or `si` for short: Execute one instruction
- `si 4`: Execute four instructions
- `nexti` or `ni` for short: Like stepi, but proceed through function calls without stopping
- `step`: Execute one C statement
- `continue`: Resume execution until the next breakpoint
- `until 3`: Continue executing until the program hits breakpoint 3
- `until *0x80483c3`: Continue executing until the program reaches address 0x80483c3
- `finish`: Resume execution until the current function returns
- `call sum(1, 2)`: Call sum(1,2) and print return value

## Examine code
- `disas`: Disassemble current function
- `disas sum`: Disassemble function sum
- `disas 0x80483b7`: Disassemble function around 0x80483b7
- `disas 0x80483b7 0x80483c7`: Disassemble code within specified address range
- `print /x $rip`: Print program counter in hex
- `print /d $rip`: Print program counter in decimal
- `print /t $rip`: Print program counter in binary

## Examine Data
- `print /d $rax`: Print contents of %rax in decimal
- `print /x $rax`: Print contents of %rax in hex
- `print /t $rax`: Print contents of %rax in binary
- `print /d (int)$rax`: Print contents of %rax in decimal after sign-extending lower 32-bits.
- `print 0x100`: Print decimal representation of 0x100
- `print /x 555`: Print hex representation of 555
- `print /x ($rsp+8)`: Print (contents of %rsp) + 8 in hex
- `print *(int *) 0xbffff890`: Print integer at address 0xbffff890
- `print *(int *) ($rsp+8)`: Print integer at address %rsp + 8
- `print (char *) 0xbfff890`: Examine a string stored at 0xbffff890

## Examine Memory
- `x/w 0xbffff890`: Examine (4-byte) word starting at address 0xbffff890
- `x/w $rsp`: Examine (4-byte) word starting at address in $rsp
- `x/wd $rsp`: Examine (4-byte) word starting at address in $rsp. Print in decimal
- `x/2w $rsp`: Examine two (4-byte) words starting at address in $rsp
- `x/2wd $rsp`: Examine two (4-byte) words starting at address in $rsp. Print in decimal
- `x/g $rsp`: Examine (8-byte) word starting at address in $rsp
- `x/gd $rsp`: Examine (8-byte) word starting at address in $rsp. Print in decimal
- `x/a $rsp`: Examine address in $rsp. Print as offset from previous global symbol
- `x/s 0xbffff890`: Examine a string stored at 0xbffff890
- `x/20b sum`: Examine first 20 opcode bytes of function sum
- `x/10i sum`: Examine first 10 instructions of function sum

> Personal recommendation<br />
> `x/2xd $rsp`: Examine first 2 decimals in $rsp

(Note: the format string for the ‘x’ command has the general form x/[NUM][SIZE][FORMAT] where NUM = number of objects to display, SIZE = size of each object (b=byte, h=half-word, w=word, g=giant (quad-word)), FORMAT = how to display each object (d=decimal, x=hex, o=octal, etc.). If you don’t specify SIZE or FORMAT, either a default value, or the last value you specified in a previous ‘print’ or ‘x’ command is used.)

## Extra Information
- `backtrace`: Print the current address and stack backtrace
- `where`: Print the current address and stack backtrace
- `info program`: Print current status of the program
- `info functions`: Print functions in the program
- `info stack`: Print backtrace of the stack
- `info frame`: Print information about the current stack frame
- `info registers` or `i r` for short: Print registers and their contents
- `info breakpoints`: Print status of user-settable breakpoints
- `display /FMT EXPR`: Print expression EXPR using format FMT every time GDB stops
- `undisplay`: Turn off display mode
- `help`: Get information about gdb

## Jump instructions
- `JMP`: Unconditional jump, doesnt need to check anything.
- `JE`: Jump if equal.
- `JNE`: Jump if NOT equal.
- `JG`: Jump if greater.
- `JGE`: Jump if greater or equal.
- `JL`: Jump if less.
- `JLE`: Jump if less or equal.

### Complicated ones
> You will most likely not use this so dont worry much.
- `JS`: Jump if sign flag is set, meaning, the result is negative.
- `JNS`: Jump if sign flag is clear, meaning, the result is NOT negative.
- `JO`: Jump if overflow flag is set, meaning, the result caused overflow.
- `JNO`: Jump if overflow flag is clear, meaning, the result did NOT cause overflow.