import React, { useRef } from 'react';
import { Formik, Form } from 'formik';

import Button from 'shared/components/Button/button';
import SelectBox from 'shared/components/selectBox/selectBox';
import TagsBox from 'shared/components/TagsBox/tagsBox';

const Step3 = ({ formData, setFormData, setSteps, setStepsView, prevStep, nextStep }) => {
  const formRef = useRef(null);
  const initialValues = {
    blood: formData.blood,
    disease: formData.disease,
    surgery: formData.surgery,
    allergy: formData.allergy,
  };

  const getFormValues = val => {
    const { blood, disease, surgery, allergy } = val;
    setFormData(prevState => ({
      ...prevState,
      blood,
      disease,
      surgery,
      allergy,
    }));
  };

  const handlePrevSteps = () => {
    setStepsView(prevStep);
    getFormValues(formRef.current.values);
  };

  const handleFormSubmit = values => {
    console.log(values);
    getFormValues(values);
    setSteps(prevState => prevState.concat(nextStep));
    setStepsView(nextStep);
  };

  return (
    <Formik innerRef={formRef} initialValues={initialValues} onSubmit={values => handleFormSubmit(values)}>
      {({ setFieldValue, errors, touched, values }) => (
        <Form>
          <div className="row">
            <div className="col-md-6 mb-4">
              <TagsBox
                name="disease"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                label={{ EN: 'Disease / s', AR: 'Disease / s' }}
                items={['Disease Name 1', 'Disease Name 2', 'Disease Name 3', 'Disease Name 4']}
              />
            </div>
            <div className="col-md-6 mb-4">
              <TagsBox
                name="surgery"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                label={{ EN: 'Surgery', AR: 'Surgery' }}
                items={['Surgery Name 1', 'Surgery Name 2', 'Surgery Name 3', 'Surgery Name 4']}
              />
            </div>
            <div className="col-md-12 mb-4">
              <TagsBox
                name="allergy"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                label={{ EN: 'Allergy', AR: 'Allergy' }}
                items={['Allergy Name 1', 'Allergy Name 2', 'Allergy Name 3', 'Allergy Name 4']}
              />
            </div>
            <div className="col-md-12 mb-4">
              <SelectBox
                name="blood"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
                label={{ EN: 'Blood Type', AR: 'Blood Type' }}
                items={[
                  { id: 1, name: 'A+' },
                  { id: 2, name: 'B+' },
                ]}
                displayExpr="name"
                valueExpr="name"
              />
            </div>
          </div>
          <div className="mt-4 wizard-foot-actions d-flex align-items-center justify-content-between">
            <Button width="135" type="normal" text={{ EN: 'Back', AR: 'Back' }} onClick={handlePrevSteps} />
            <Button width="135" text={{ EN: 'Next', AR: 'Next' }} useSubmitBehavior />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step3;
