document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Predefined responses for common queries
    const predefinedResponses = {
        'budget': {
            '5000': `For a budget of ₹5000, here are some great DIY projects:
1. Door Makeover:
   - Sandpaper and paint (₹1000)
   - New door handles (₹500-1000)
   - Weather stripping (₹500)
   - Total: ₹2000-2500

2. Wall Shelves:
   - Wood planks (₹1000)
   - Brackets (₹500)
   - Paint/stain (₹500)
   - Total: ₹2000

3. Plant Wall:
   - Small pots (₹1000)
   - Hanging system (₹500)
   - Plants (₹1000)
   - Total: ₹2500

4. Custom Mirror Frame:
   - Mirror (₹1000)
   - Wood for frame (₹1000)
   - Paint and glue (₹500)
   - Total: ₹2500

Would you like more details about any of these projects?`,
            '200': `For a budget of ₹200, here are some creative DIY projects:
1. Paper Wall Art:
   - Colored paper (₹50)
   - Glue (₹30)
   - Frame (₹120)
   - Total: ₹200

2. Mason Jar Organizer:
   - Mason jar (₹80)
   - Paint (₹50)
   - Twine (₹20)
   - Labels (₹50)
   - Total: ₹200

3. Photo Display:
   - Clothes pins (₹40)
   - String (₹30)
   - Photos (print at home)
   - Small decorations (₹130)
   - Total: ₹200

4. Custom Coasters:
   - Tiles (₹100 for 4)
   - Felt pads (₹50)
   - Paint (₹50)
   - Total: ₹200

Would you like step-by-step instructions for any of these projects?`,
            'default': 'I can suggest projects for any budget! Just let me know your budget range.'
        },
        'tools': {
            'basic': `With basic tools, here are some easy DIY projects:
1. Wall Art:
   - Materials: Canvas, paint, brushes
   - Tools: Basic paint brushes
   - Difficulty: Easy
   - Time: 2-3 hours

2. Photo Frame:
   - Materials: Wood, glue, paint
   - Tools: Hammer, nails
   - Difficulty: Easy
   - Time: 1-2 hours

3. Plant Hanger:
   - Materials: Rope, small pot
   - Tools: Scissors
   - Difficulty: Very Easy
   - Time: 30 minutes

4. Custom Coasters:
   - Materials: Tiles, felt, paint
   - Tools: Paint brushes
   - Difficulty: Easy
   - Time: 1 hour

Would you like detailed instructions for any of these projects?`
        },
        'door': {
            'improve': `Here's how to improve your door on a budget:
1. Clean and Sand:
   - Remove old paint/dirt
   - Sand smooth
   - Cost: ₹200-300

2. Paint:
   - Use good quality paint
   - Apply 2 coats
   - Cost: ₹500-700

3. Hardware Upgrade:
   - New handles
   - Hinges if needed
   - Cost: ₹500-1000

4. Weather Stripping:
   - Install new weather stripping
   - Improves insulation
   - Cost: ₹300-500

Total Cost: ₹1500-2500

Would you like step-by-step instructions for any of these improvements?`
        },
        'decor': {
            'room': `Here are some creative room decor ideas:
1. Wall Gallery:
   - Mix of frames and artwork
   - Cost: ₹1000-2000
   - Time: 2-3 hours
   - Difficulty: Easy

2. Floating Shelves:
   - Wood planks
   - Brackets
   - Cost: ₹800-1500
   - Time: 1-2 hours
   - Difficulty: Medium

3. Custom Headboard:
   - Fabric or wood
   - Padding
   - Cost: ₹1500-2500
   - Time: 3-4 hours
   - Difficulty: Medium

4. String Light Canopy:
   - Fairy lights
   - Hooks
   - Cost: ₹500-1000
   - Time: 1 hour
   - Difficulty: Easy

Would you like detailed instructions for any of these projects?`
        },
        'festival': {
            'diwali': `Here are some DIY Diwali decoration ideas:
1. Paper Lanterns:
   - Colored paper (₹100)
   - LED lights (₹200)
   - Glue and scissors (₹50)
   - Total: ₹350
   - Time: 1-2 hours
   - Difficulty: Easy

2. Rangoli Stencils:
   - Stencil paper (₹50)
   - Colors (₹100)
   - Total: ₹150
   - Time: 30 minutes
   - Difficulty: Very Easy

3. Diya Painting:
   - Terracotta diyas (₹100 for 10)
   - Acrylic paints (₹150)
   - Total: ₹250
   - Time: 1 hour
   - Difficulty: Easy

4. Toran (Door Hanging):
   - Fabric (₹200)
   - Beads and mirrors (₹150)
   - Total: ₹350
   - Time: 2 hours
   - Difficulty: Medium

Would you like step-by-step instructions for any of these decorations?`,
            'christmas': `Here are some DIY Christmas decoration ideas:
1. Paper Snowflakes:
   - White paper (₹50)
   - Scissors
   - Total: ₹50
   - Time: 30 minutes
   - Difficulty: Easy

2. Pine Cone Ornaments:
   - Pine cones (free)
   - Paint and glitter (₹100)
   - Ribbon (₹50)
   - Total: ₹150
   - Time: 1 hour
   - Difficulty: Easy

3. Christmas Wreath:
   - Wire frame (₹100)
   - Artificial greens (₹200)
   - Decorations (₹150)
   - Total: ₹450
   - Time: 2 hours
   - Difficulty: Medium

4. Mason Jar Snow Globes:
   - Mason jars (₹100)
   - Mini figurines (₹100)
   - Glitter (₹50)
   - Total: ₹250
   - Time: 1 hour
   - Difficulty: Easy

Would you like detailed instructions for any of these decorations?`
        },
        'beginner': {
            'projects': `Here are some perfect projects for beginners:
1. Custom Photo Frame:
   - Materials: Cardboard, glue, decorations
   - Cost: ₹200-300
   - Time: 1 hour
   - Difficulty: Very Easy

2. Painted Plant Pots:
   - Materials: Terracotta pots, paint
   - Cost: ₹150-250
   - Time: 30 minutes
   - Difficulty: Very Easy

3. Wall Hanging:
   - Materials: Fabric, embroidery thread
   - Cost: ₹300-400
   - Time: 2 hours
   - Difficulty: Easy

4. Customized Tote Bag:
   - Materials: Plain tote bag, fabric paint
   - Cost: ₹250-350
   - Time: 1 hour
   - Difficulty: Easy

Would you like detailed instructions for any of these beginner-friendly projects?`
        }
    };

    // Function to add a message to the chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to analyze user input and generate response
    function generateResponse(message) {
        message = message.toLowerCase();
        
        // Check for budget-related queries
        if (message.includes('budget') || message.includes('₹')) {
            const budgetMatch = message.match(/₹(\d+)/);
            if (budgetMatch) {
                const budget = budgetMatch[1];
                if (predefinedResponses.budget[budget]) {
                    return predefinedResponses.budget[budget];
                }
            }
            return predefinedResponses.budget.default;
        }
        
        // Check for tool-related queries
        if (message.includes('tools') || message.includes('basic')) {
            return predefinedResponses.tools.basic;
        }
        
        // Check for door-related queries
        if (message.includes('door')) {
            return predefinedResponses.door.improve;
        }

        // Check for room decor queries
        if (message.includes('room') && (message.includes('decor') || message.includes('decoration'))) {
            return predefinedResponses.decor.room;
        }

        // Check for festival decoration queries
        if (message.includes('diwali')) {
            return predefinedResponses.festival.diwali;
        }
        if (message.includes('christmas')) {
            return predefinedResponses.festival.christmas;
        }

        // Check for beginner project queries
        if (message.includes('beginner') || message.includes('bigners') || message.includes('easy') || message.includes('simple')) {
            return predefinedResponses.beginner.projects;
        }
        
        // Default response for unrecognized queries
        return `I can help you with:
1. Budget-friendly DIY projects (e.g., "My budget is ₹5000")
2. Projects for beginners (e.g., "Give me beginner projects")
3. Room decoration ideas (e.g., "Room decor ideas")
4. Festival decorations (e.g., "Diwali decorations" or "Christmas decorations")
5. Material lists and cost estimates

Please ask me about any of these specific topics!`;
    }

    // Function to handle user input
    function handleUserInput() {
        const message = userInput.value.trim();
        if (!message) return;

        // Add user message to chat
        addMessage(message, true);
        userInput.value = '';

        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot';
        typingIndicator.innerHTML = '<p>AI is thinking...</p>';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate AI thinking
        setTimeout(() => {
            // Remove typing indicator
            chatMessages.removeChild(typingIndicator);
            
            // Generate and add response
            const response = generateResponse(message);
            addMessage(response);
        }, 1000);
    }

    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
}); 