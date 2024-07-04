const emailJS_API = 'https://api.emailjs.com/api/v1.0/email'

export interface sendEmailProps {
    service_id: string
    template_id: string
    user_id: string
    personalInfo: { [key: string]: any }
    accessToken: string
}


export const sendEmailService = async ({ service_id, template_id, user_id, personalInfo, accessToken }: sendEmailProps): Promise<void> => {
    try {
        const emailData = {
            service_id,
            template_id,
            user_id,
            template_params: personalInfo,
            accessToken
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(emailData)
        }

        const response = await fetch(`${emailJS_API}/send`, options)

        if(!response.ok){
            const errorText = await response.text()
            throw new Error(`Error: ${errorText}`)
        }

        console.log('Email sent succesfully')

    } catch (error: any) {
        console.error(`failed to send email: ${error.message}`);
        
    }
}