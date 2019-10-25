# DXC Alert Component

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>type: 'info' | 'confirm' | 'warning' | 'error'</td>
        <td><code>'info'</code></td>
        <td>Uses on of the available alert types.</td>
    </tr>
    <tr>
        <td>mode: 'inline' | 'modal'</td>
        <td><code>'inline'</code></td>
        <td>Uses on of the available alert modes:
            <ul>
                <li>
                    <strong>inline:</strong> if onClose function is received, close button should be visible and the fuction should be executed whe its clicked.
                    There is no overlay layer. 
                    Position should be decided by the user.
                </li>
                <li>
                    <strong>modal:</strong> In this mode it will be always an overlay layer behind the alert. 
                    <br>If onClose function is received it will be called if the X button is clicked or if the user clicks outside of the component. The alert should be displayed in the middle of the screen.
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>isVisible: boolean</td>
        <td>true</td>
        <td>If true, the alert should be visible.</td>
    </tr>
    <tr>
        <td>inlineText: string</td>
        <td></td>
        <td>Text to display after icon and alert type and before content.</td>
    </tr>
    <tr>
        <td>onClose: function</td>
        <td></td>
        <td>This function will be called when the user clicks the close button. If there is no function we should close the alert by default.</td>
    </tr>
</table>
