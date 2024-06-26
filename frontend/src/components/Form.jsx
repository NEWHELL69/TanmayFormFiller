import axios from "axios";

const Form = () => {
    const generate = (event) => {
        event.preventDefault()

        const form = document.getElementById('form');
        const formData = new FormData(form);

        const data = {}

        for (const pair of formData.entries()) {
            data[pair[0]] = pair[1]
        }

        axios.post('./download',{}, {
            responseType: 'blob', 
        }).then((res) => {


            const url = window.URL.createObjectURL(new Blob([res.data]));


            const link = document.createElement('a');
            link.href = url;
            link.download = 'filename.zip'; // Set the desired file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            window.URL.revokeObjectURL(url);
        }).catch((err) => {
            console.log("Submit unsuces" + err);
        })
    };

    //     axios.post('./email/send', {
    //         agreementType: 1,
    //         placeholders: data,
    //         mailDetails: {
    //             toAddress: ["kushagra0304@gmail.com","garimasinghchauhan29@gmail.com"]
    //         }
    //     },{
    //         responseType: 'arraybuffer', 
    //     }).then((res) => {
    //         const blob = new Blob([res.data], { type: 'application/pdf' });

    //         const url = window.URL.createObjectURL(blob);

    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.download = 'filename.pdf'; // Set the desired file name
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);

    //         window.URL.revokeObjectURL(url);
    //     }).catch((err) => {
    //         console.log("Submit unsuces" + err);
    //     })
    // };

    return (
        <div id="center">
            <form id="form" onSubmit={generate}>
                <div className="clientInfo">
                    <FormField
                        label="Date of Agreement Execution"
                        id="DateOfAgreementExecution"
                        type="date"
                        name="DateOfAgreementExecution"
                    />
                    <FormField
                        label="Client Name"
                        id="ClientName"
                        type="text"
                        placeholder="Text input"
                        name="ClientName"
                    />
                    <FormField
                        label="Constitution Of Business"
                        id="ConstitutionOfBusiness"
                        type="text"
                        placeholder="Text input"
                        name="ConstitutionOfBusiness"
                    />
                    <FormField
                        label="Client Address"
                        id="ClientAddress"
                        type="text"
                        placeholder="Text input"
                        name="ClientAddress"
                    />
                    <FormField
                        label="Seller's Representative Designation"
                        id="SellersRepresentativeDesignation"
                        type="text"
                        placeholder="Text input"
                        name="SellersRepresentativeDesignation"
                    />
                    <FormField
                        label="Agreement Time Period"
                        id="AgreementTimePeriod"
                        type="text"
                        placeholder="(Month/year)"
                        name="AgreementTimePeriod"
                    />
                </div>

                <div id="separator"></div>

                <div id="ServicePackageDurationAndFee">
                    <FormField
                        label="Market Place"
                        id="MarketPlace"
                        type="text"
                        placeholder="Text input"
                        name="MarketPlace"
                    />
                    <FormField
                        label="Package Duration"
                        id="PackageDuration"
                        type="text"
                        placeholder="Text input"
                        name="PackageDuration"
                    />
                    <FormField
                        label="Advance Package Amount"
                        id="AdvancePackageAmount"
                        type="text"
                        placeholder="Text input"
                        name="AdvancePackageAmount"
                    />
                </div>

                <div id="termAndCondition">
                    <FormField
                        label="Terms & Conditions of Sales"
                        id="TermsConditionsOfSales"
                        type="textarea"
                        placeholder="Text Input"
                        name="TermsConditionsOfSales"
                    />
                </div>

                <div id="recipient">
                    <FormField
                        label="To"
                        id="emailAddressOfRecipient"
                        type="text"
                        placeholder="Text Input"
                        name="emailAddressOfRecipient"
                    />
                </div>

                <div id="carbonCopy">
                    <FormField
                        label="CC"
                        id="emailAddressOfCC"
                        type="text"
                        placeholder="Text Input"
                        name="emailAddressOfCC"
                    />
                </div>

                <div id="subject">
                    <FormField
                        label="subject"
                        id="subject"
                        type="textarea"
                        placeholder="Text Input"
                        name="subject"
                    />
                </div>

                <div id="body">
                    <FormField
                        label="Body"
                        id="bodyOfMail"
                        type="textarea"
                        placeholder="Text Input"
                        name="bodyOfMail"
                    />
                </div>

                <div className="field">
                    <p className="control">
                        <button className="button" type="submit">
                            Send
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
};

const FormField = ({ label, id, type, placeholder, name }) => {
    return (
        <div className="field">
            <label htmlFor={id} className="label">
                {label}
            </label>
            <div className="control">
                {type === 'textarea' ? (
                    <textarea id={id} className="textarea" placeholder={placeholder} name={name}></textarea>
                ) : (
                    <input id={id} className="input" type={type} placeholder={placeholder} name={name} />
                )}
            </div>
        </div>
    );
};

export default Form;
