document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const equalButton = document.getElementById('equal');
    const clearButton = document.getElementById('clear');

    // Attach event listener to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim();
            if (buttonText === '=') {
                try {
                    const result = eval(screen.value);
                    if (result === undefined || isNaN(result)) {
                        throw new Error('Invalid expression');
                    }
                    screen.value = result;
                } catch (error) {
                    screen.value = 'Error: Invalid expression';
                }
            } else if (buttonText === 'C') {
                screen.value = '';
            } else {
                screen.value += buttonText;
            }
        });
    });
});
