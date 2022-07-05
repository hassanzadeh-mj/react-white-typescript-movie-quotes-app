import { FormEvent, useState } from 'react';
import { Accordion, Badge, Button, Form } from "react-bootstrap";
interface Iquotes {
  id: number;
  name: string;
  character: string;
  quotation: string;
}

const App = () => {
  const [Quotess, setQuotess] = useState<Iquotes[]>([{
    id: 1,
    name: "mojtaba",
    character: "Hassanzadeh",
    quotation: "teypescript whit react",
  }])
  const [quotation, setquotation] = useState<string>("");
  const [character, setcharacter] = useState<string>("");
  const [name, setname] = useState<string>("");

  const resetValue = (): void => {
    setquotation(""),
      setcharacter(""),
      setname("")
  };
  const hanlerAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name) {
      return alert("نام فیلم وارد نشده است")
    }
    if (!character) {
      return alert(" شخصیت وارد نشده است")
    }
    if (!quotation) {
      return alert("   جمله  وارد نشده است")
    }
    setQuotess([...Quotess, {
      id: Math.floor(Math.random() * 1000000),
      name,
      character,
      quotation
    }]);
    resetValue();
  }
  return (
    <div className='row justify-content-center mt-5'>
      <div className="col-4">
        <Form onSubmit={(e) => hanlerAdd(e)}  autoComplete="off">
          <Form.Group className="mb-3" controlId="Movie Name..?">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Movie Name..?" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Character..?">
            <Form.Label>Character</Form.Label>
            <Form.Control type="text" value={character} onChange={(e) => setcharacter(e.target.value)} placeholder="Character..?" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Quotation	">
            <Form.Label>Quotation	</Form.Label>
            <Form.Control as="textarea" rows={3} value={quotation} onChange={(e) => setquotation(e.target.value)} placeholder="Quotation..?" />
          </Form.Group>
          <Button variant="secondary" type="submit"> ثبت</Button>
        </Form>
      </div>
      <div className="col-4"> {Quotess.map((Quotes) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{Quotes.name}
              <Badge bg="secondary mx-3">{Quotes.character}
              </Badge></Accordion.Header>
            <Accordion.Body>
              {Quotes.quotation}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
      </div>
    </div>);
}
export default App;