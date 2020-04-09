// import React, { useState } from 'react';
// import * as bs from 'react-bootstrap'
// import { Formik, Form, Field, ErrorMessage} from 'formik'
// import axios from 'axios'

// function Predict(props) {
//         return (
//             <CampaignController></CampaignController>
//         )
// }

// export default Predict

// const CampaignController = props => {
//     const [loading, setLoading] = useState(false)
//     const [numdonors, setNumDonors] = useState('')
//     const [hasResults, setHasResults] = useState(false)
//     const [moneyString, setMoneyString] = useState('')

//     return (
//         <Formik
//             initialValues={{
//                 auto_fb_post_mode: '',
//                 currencycode: '',
//                 goal: '',
//                 media_type: '',
//                 visible_in_search: '',
//                 is_charity: '',
//             }}
//             validateOnChange={false}
//             validateOnBlur={false}
//             validate={values => {
//                 const errors = {}
//                 if(!values.goal){
//                     errors.goal = "Please enter a goal"
//                 }
//                 if(!Number.isInteger(values.goal)){
//                     errors.goal = "Please enter a whole number for your goal"
//                 }
//                 if(!values.auto_fb_post_mode){
//                     errors.auto_fb_post_mode = "Please select an answer"
//                 }
//                 if(!values.currencycode){
//                     errors.currencycode = "Please select a currency code"
//                 }
//                 if(!values.media_type){
//                     errors.media_type = "Please select a media type"
//                 }
//                 if(!values.visible_in_search){
//                     errors.visible_in_search = "Please select an answer"
//                 }
//                 if(!values.is_charity){
//                     errors.is_charity = "Please select an answer"
//                 }
//                 return errors
//             }}
//             onSubmit={async (values, actions) => {
//                 setLoading(true)
//                 const resp = await axios.post('http://localhost:8000/api/campaigncreate', values)
//                 setNumDonors(resp.data.numdonors)
//                 setMoneyString((parseFloat(resp.data.avg_donation).toFixed(2)).toString() + ' ' + values.currencycode)
//                 setHasResults(true)
//                 setLoading(false)
                
//             }}
//         >{form => (
//             <>
//             <CampaignForm form={form} loading={loading} />
//             {hasResults ? 
//                 <bs.Container fluid className="p-3">
//                     <bs.Row>
//                     <bs.Col></bs.Col>
//                         <bs.Col md = '4'>
//                             <bs.Card>
//                                 <bs.Card.Header style={{textAlign: 'center'}}><b>Number of Donors</b></bs.Card.Header>
//                                 <bs.Card.Body>
//                                     <bs.Card.Text style={{textAlign: 'center'}}>{Math.round(numdonors)} </bs.Card.Text>
//                                 </bs.Card.Body>
//                             </bs.Card>
//                         </bs.Col>
//                         <bs.Col md = '4'>
//                             <bs.Card>
//                                 <bs.Card.Header style={{textAlign: 'center'}}><b>Average Donation</b></bs.Card.Header>
//                                 <bs.Card.Body>
//                                     <bs.Card.Text style={{textAlign: 'center'}}>{moneyString}</bs.Card.Text>
//                                 </bs.Card.Body>
//                             </bs.Card>
//                         </bs.Col>
//                         <bs.Col></bs.Col>
//                     </bs.Row>
//                 </bs.Container>
//                 : null }</>
//         )}</Formik> 
//     )
// }

// const CampaignForm = props => (
//     <Form>
//         <bs.Container fluid className="p-3">
//             <bs.Row  style={{marginBottom: 10}}>
//                 <bs.Col></bs.Col>
//                 <bs.Col md = '8'>
//                     <bs.Form.Label>Will you set your campaign to automatically post to Facebook? </bs.Form.Label><br></br>
//                     <Field className="form-control" as="select" name="auto_fb_post_mode">
//                         <option value="">Select...</option>
//                         <option value="True">Yes</option>
//                         <option value="False">No</option>
//                     </Field>
//                     <ErrorMessage name="auto_fb_post_mode" component="div" className="text-danger" />

//                     <br></br><bs.Form.Label>Will you allow your campaign to be visible in a public search? </bs.Form.Label><br></br>
//                     <Field className="form-control" as="select" name="visible_in_search">
//                         <option value="">Select...</option>
//                         <option value="True">Yes</option>
//                         <option value="False">No</option>
//                     </Field>
//                     <ErrorMessage name="visible_in_search" component="div" className="text-danger" />

//                     <br></br><bs.Form.Label >Is your campaign for a charity? </bs.Form.Label><br></br>
//                     <Field className="form-control" as="select" name="is_charity">
//                         <option value="">Select...</option>
//                         <option value="True">Yes</option>
//                         <option value="False">No</option>
//                     </Field>
//                     <ErrorMessage name="is_charity" component="div" className="text-danger" />
                    
//                     <br></br><bs.Form.Label>What will be your main media for your campaign?</bs.Form.Label><br></br>
//                     <Field className="form-control" as="select" name="media_type">
//                         <option value="">Select...</option>
//                         <option value="0">Youtube Video</option>
//                         <option value="1">Facebook Photo</option>
//                         <option value="2">Upload Video</option>
//                         <option value="3">Upload Photo</option>
//                     </Field>
//                     <ErrorMessage name="media_type" component="div" className="text-danger" />

//                     <br></br><bs.Form.Label>What currency will you use? </bs.Form.Label><br></br>
//                     <Field className="form-control" as="select" name="currencycode">
//                         <option value="">Select...</option>
//                         <option value="USD">USD</option>
//                         <option value="CAD">CAD</option>
//                         <option value="GBP">GBP</option>
//                         <option value="EUR">EUR</option>
//                         <option value="AUD">AUD</option>
//                         <option value="CHF">CHF</option>
//                         <option value="SEK">SEK</option>
//                         <option value="DKK">DKK</option>
//                         <option value="NOK">NOK</option>
//                     </Field>
//                     <ErrorMessage name="currencycode" component="div" className="text-danger" />

//                     <br></br><Input title="Fundraising Goal:" name="goal" type="number" />
//                     <bs.Button variant="success" type='submit' disabled={props.loading}> {props.loading  && <bs.Spinner animation="grow" variant="light" size="sm" />} Submit </bs.Button>
//                     <hr></hr>
//                 </bs.Col>
//                 <bs.Col></bs.Col>
//             </bs.Row>
//         </bs.Container>
//     </Form>
// )

// const Input = (props) => (
//     <Field name={props.name}>{rProps => (
//         <bs.Form.Group>
//             {props.title &&
//                 <bs.Form.Label>{props.title}</bs.Form.Label>
//             }
//             <bs.Form.Control
//                 type={props.type}
//                 placeholder={props.placeholder}
//                 disabled={rProps.form.isSubmitting}
//                 {...rProps.field}
//             />
//             {rProps.meta.touched && rProps.meta.error &&
//                 <div className="text-danger">{rProps.meta.error}</div>
//             }
//         </bs.Form.Group>
//     )}</Field>
// )