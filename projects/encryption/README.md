# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 4
My Partner's Key: 9

Our initial shared key: 13

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|Uryyb, V'z jevgvat fbzrguvat. |Hello, I'm writing something.  |13|
|Byffi Uffcy. Biq uly sio? |Hello Allie, How are you?  |20|
|x pb uxct, wdl pgt ngj|I am fine, how are you?|15|
|We did a great job!|We did a great job|0|


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here: ezs0cW

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 011001010111101001110011001100000110001101010111

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Allie]
    Destination: [Taras]  
    Sequence: 1/3
    Data: [01100101] [01111010]
    =========
    Packet 2:

    Source: [Allie]
    Destination: [Taras]
    Sequence: 2/3 
    Data: [01110011] [00110000]
    =========
    Packet 3:

    Source: [Allie]
    Destination: [Taras]
    Sequence: 3/3
    Data: [01100011] [01010111]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
-- Symmetric encryption requires a shared secret, and asymmetric encryption doesn't, and instead requires a public and private key. In this simulation, we used asymmetric encryption to establish a shared secret that we could use for symmetric encryption. 
- Why is it important that this protocol uses a new key for each message?
-- This protocal uses a new key for every message so if a hacker does manage to decrypt it, they can only decrypt one message. 
- Why is it important that you never share your secret key?
-- You must never share your private key, because it allows the other person to decrypt any message sent to you.
- In the transport layer, do these messages use TCP or UDP? Why?
-- These messages use TCP to make sure all the packets arrive, and resend them if they were lost or corrupted.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
-- After the packets have been created, they will be routed through the internet layer, which will decide where they go, and they will be sent through the link layer as electrical signals.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?
-- This protocol encrypts the payload, but not the header. The hacker or adversary could see where the message is being sent and who it's being sent to.
